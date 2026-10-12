import { handleTranslationRequest } from "../translation-handler.mjs";

export default async function handler(request, response) {
  const forwardedProtocol = request.headers["x-forwarded-proto"];
  const protocol = Array.isArray(forwardedProtocol)
    ? forwardedProtocol[0]
    : forwardedProtocol || "https";
  const host = request.headers.host;
  const headers = new Headers();
  for (const [name, value] of Object.entries(request.headers)) {
    if (value !== undefined) {
      headers.set(name, Array.isArray(value) ? value.join(", ") : value);
    }
  }

  const body = request.method === "GET" || request.method === "HEAD"
    ? undefined
    : typeof request.body === "string"
      ? request.body
      : JSON.stringify(request.body ?? {});
  const webRequest = new Request(`${protocol}://${host}${request.url}`, {
    method: request.method,
    headers,
    body,
    ...(body ? { duplex: "half" } : {}),
  });
  const result = await handleTranslationRequest(webRequest);
  response.status(result.status);
  result.headers.forEach((value, name) => response.setHeader(name, value));
  response.send(await result.text());
}
