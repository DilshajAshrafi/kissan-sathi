import { createServer } from 'node:http';
import { createReadStream } from 'node:fs';
import { stat } from 'node:fs/promises';
import { Readable } from 'node:stream';
import { extname, resolve, sep } from 'node:path';
import { fileURLToPath } from 'node:url';
import { handleChatRequest } from './chat-handler.mjs';

const rootDirectory = fileURLToPath(new URL('.', import.meta.url));
const port = Number(process.env.PORT || 3000);

const contentTypes = new Map([
  ['.css', 'text/css; charset=utf-8'],
  ['.html', 'text/html; charset=utf-8'],
  ['.jpeg', 'image/jpeg'],
  ['.jpg', 'image/jpeg'],
  ['.js', 'text/javascript; charset=utf-8'],
  ['.json', 'application/json; charset=utf-8'],
  ['.mjs', 'text/javascript; charset=utf-8'],
  ['.png', 'image/png'],
  ['.svg', 'image/svg+xml'],
  ['.webp', 'image/webp'],
]);

function sendJson(response, statusCode, payload) {
  response.writeHead(statusCode, {
    'content-type': 'application/json; charset=utf-8',
    'cache-control': 'no-store',
    'x-content-type-options': 'nosniff',
  });
  response.end(JSON.stringify(payload));
}

async function handleChat(request, response) {
  try {
    const headers = new Headers();
    for (const [name, value] of Object.entries(request.headers)) {
      if (value !== undefined) {
        headers.set(name, Array.isArray(value) ? value.join(', ') : value);
      }
    }
    const url = new URL(request.url || '/api/chat', `http://${request.headers.host || 'localhost'}`);
    const webRequest = new Request(url, {
      method: request.method,
      headers,
      body: Readable.toWeb(request),
      duplex: 'half',
    });
    const result = await handleChatRequest(webRequest, { clientId: request.socket.remoteAddress });
    response.writeHead(result.status, Object.fromEntries(result.headers.entries()));
    response.end(Buffer.from(await result.arrayBuffer()));
  } catch (error) {
    console.error('Could not handle chat request:', error.message);
    sendJson(response, 500, { error: 'The chat service could not process this request.' });
  }
}

async function serveStaticFile(request, response, pathname) {
  let decodedPath;
  try {
    decodedPath = decodeURIComponent(pathname);
  } catch {
    response.writeHead(400);
    response.end('Bad request');
    return;
  }

  const requestedPath = decodedPath === '/' ? '/index.html' : decodedPath;
  const filePath = resolve(rootDirectory, `.${requestedPath}`);
  const privatePaths = [
    '/server.mjs',
    '/chat-handler.mjs',
    '/package.json',
    '/api/chat.js',
    '/netlify',
    '/.git',
    '/node_modules',
  ];
  const containsHiddenPath = requestedPath.split('/').some((segment) => segment.startsWith('.'));
  if (filePath !== rootDirectory && !filePath.startsWith(rootDirectory.endsWith(sep) ? rootDirectory : rootDirectory + sep)) {
    response.writeHead(403);
    response.end('Forbidden');
    return;
  }
  if (
    containsHiddenPath ||
    privatePaths.some((privatePath) => requestedPath === privatePath || requestedPath.startsWith(`${privatePath}/`))
  ) {
    response.writeHead(404);
    response.end('Not found');
    return;
  }

  let fileInfo;
  try {
    fileInfo = await stat(filePath);
  } catch {
    response.writeHead(404);
    response.end('Not found');
    return;
  }

  const contentType = contentTypes.get(extname(filePath).toLowerCase());
  if (!fileInfo.isFile() || !contentType) {
    response.writeHead(404);
    response.end('Not found');
    return;
  }

  response.writeHead(200, {
    'content-type': contentType,
    'content-length': fileInfo.size,
    'x-content-type-options': 'nosniff',
    'referrer-policy': 'same-origin',
  });
  if (request.method === 'HEAD') {
    response.end();
    return;
  }

  const fileStream = createReadStream(filePath);
  fileStream.on('error', (error) => {
    console.error(`Could not read static file ${requestedPath}:`, error.message);
    if (!response.headersSent) {
      response.writeHead(500);
    }
    response.end('Could not read file');
  });
  fileStream.pipe(response);
}

const server = createServer(async (request, response) => {
  let requestUrl;
  try {
    requestUrl = new URL(request.url || '/', `http://${request.headers.host || 'localhost'}`);
  } catch {
    response.writeHead(400);
    response.end('Bad request');
    return;
  }

  if (requestUrl.pathname === '/api/chat') {
    if (request.method !== 'POST') {
      response.writeHead(405, { allow: 'POST' });
      response.end('Method not allowed');
      return;
    }
    await handleChat(request, response);
    return;
  }

  if (request.method !== 'GET' && request.method !== 'HEAD') {
    response.writeHead(405, { allow: 'GET, HEAD' });
    response.end('Method not allowed');
    return;
  }
  await serveStaticFile(request, response, requestUrl.pathname);
});

server.listen(port, () => {
  console.log(`Kisaan Sathi is available at http://localhost:${port}`);
});
