const maxRequestLength = 16_000;
const maxMessageLength = 1_000;
const maxMessages = 10;
const rateLimitWindow = 60_000;
const rateLimitRequests = 12;
const rateLimits = new Map();
const supportedChatLanguages = new Set([
  'en', 'as', 'bn', 'brx', 'doi', 'gu', 'hi', 'kn', 'ks', 'kok', 'mai',
  'ml', 'mni', 'mr', 'ne', 'or', 'pa', 'sa', 'sat', 'sd', 'ta', 'te', 'ur',
]);

const agricultureInstructions = `You are Kisaan Sathi, a careful agricultural information assistant for farmers.
Answer only questions related to agriculture, crops, soil, irrigation, pests, farm practices, and agricultural support programs. If a question is unrelated, politely redirect the user to agriculture.
Use practical, plain language and ask concise follow-up questions when the crop, location, season, or symptoms are needed. Reply in the language requested by the user.
Give general educational information, not a diagnosis. Do not prescribe pesticide products, chemical mixtures, or exact application dosages. For disease, pest, or chemical-treatment decisions, advise the farmer to consult a qualified local agriculture expert and follow the product label and local rules.
Do not claim access to live weather, market prices, or current scheme eligibility. Encourage checking official local sources for time-sensitive details.
Never request passwords, payment details, or government identity numbers. Do not claim that you have contacted an expert or submitted a request.`;

function jsonResponse(status, payload) {
  return new Response(JSON.stringify(payload), {
    status,
    headers: {
      'content-type': 'application/json; charset=utf-8',
      'cache-control': 'no-store',
      'x-content-type-options': 'nosniff',
    },
  });
}

function isSameOriginRequest(request) {
  const origin = request.headers.get('origin');
  if (!origin) {
    return false;
  }

  try {
    const originUrl = new URL(origin);
    const requestUrl = new URL(request.url);
    return ['http:', 'https:'].includes(originUrl.protocol) && originUrl.origin === requestUrl.origin;
  } catch {
    return false;
  }
}

function isRateLimited(clientId) {
  const now = Date.now();
  let bucket = rateLimits.get(clientId);
  if (!bucket || now - bucket.startedAt >= rateLimitWindow) {
    if (rateLimits.size > 5_000) {
      for (const [key, item] of rateLimits) {
        if (now - item.startedAt >= rateLimitWindow) {
          rateLimits.delete(key);
        }
      }
    }
    bucket = { startedAt: now, count: 0 };
    rateLimits.set(clientId, bucket);
  }

  bucket.count += 1;
  return bucket.count > rateLimitRequests;
}

function validateChatPayload(payload) {
  if (
    !payload ||
    !Array.isArray(payload.messages) ||
    payload.messages.length < 1 ||
    payload.messages.length > maxMessages ||
    !supportedChatLanguages.has(payload.language)
  ) {
    return null;
  }

  const messages = [];
  for (const message of payload.messages) {
    if (
      !message ||
      !['user', 'assistant'].includes(message.role) ||
      typeof message.content !== 'string' ||
      !message.content.trim() ||
      message.content.length > maxMessageLength
    ) {
      return null;
    }
    messages.push({
      role: message.role === 'assistant' ? 'model' : 'user',
      parts: [{ text: message.content.trim() }],
    });
  }

  if (messages.at(-1).role !== 'user') {
    return null;
  }
  return { language: payload.language, messages };
}

function getClientId(request, clientId) {
  return clientId ||
    request.headers.get('x-nf-client-connection-ip') ||
    request.headers.get('x-vercel-forwarded-for') ||
    request.headers.get('x-forwarded-for')?.split(',')[0].trim() ||
    'unknown';
}

export async function handleChatRequest(request, { clientId } = {}) {
  if (request.method !== 'POST') {
    return jsonResponse(405, { error: 'Method not allowed.' });
  }
  if (!isSameOriginRequest(request)) {
    return jsonResponse(403, { error: 'This chat request was blocked. Open the site from its own address and try again.' });
  }
  if (isRateLimited(getClientId(request, clientId))) {
    return jsonResponse(429, { error: 'Too many messages in a short time. Please wait a minute and try again.' });
  }
  if (!request.headers.get('content-type')?.toLowerCase().includes('application/json')) {
    return jsonResponse(415, { error: 'Please send a valid chat message.' });
  }

  const contentLength = Number(request.headers.get('content-length') || 0);
  if (contentLength > maxRequestLength) {
    return jsonResponse(413, { error: 'Your message is too large. Please shorten it and try again.' });
  }

  let body;
  try {
    const rawBody = await request.text();
    if (new TextEncoder().encode(rawBody).length > maxRequestLength) {
      return jsonResponse(413, { error: 'Your message is too large. Please shorten it and try again.' });
    }
    body = JSON.parse(rawBody);
  } catch {
    return jsonResponse(400, { error: 'The chat request was not valid JSON.' });
  }

  const chat = validateChatPayload(body);
  if (!chat) {
    return jsonResponse(400, { error: 'Please enter a message of up to 1,000 characters.' });
  }

  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) {
    return jsonResponse(503, {
      code: 'missing_api_key',
      error: 'Gemini is not configured. Add GEMINI_API_KEY to your hosting environment variables.',
    });
  }

  const model = process.env.GEMINI_MODEL || 'gemini-2.5-flash';
  const languageNames = {
    en: 'English',
    as: 'Assamese',
    bn: 'Bengali',
    brx: 'Bodo',
    doi: 'Dogri',
    gu: 'Gujarati',
    hi: 'Hindi',
    kn: 'Kannada',
    ks: 'Kashmiri',
    kok: 'Konkani',
    mai: 'Maithili',
    ml: 'Malayalam',
    mni: 'Manipuri (Meitei)',
    mr: 'Marathi',
    ne: 'Nepali',
    or: 'Odia',
    pa: 'Punjabi',
    sa: 'Sanskrit',
    sat: 'Santali',
    sd: 'Sindhi',
    ta: 'Tamil',
    te: 'Telugu',
    ur: 'Urdu',
  };
  let upstreamResponse;
  try {
    upstreamResponse = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/${encodeURIComponent(model)}:generateContent`,
      {
        method: 'POST',
        headers: {
          'content-type': 'application/json',
          'x-goog-api-key': apiKey,
        },
        body: JSON.stringify({
          systemInstruction: {
            parts: [{
              text: `${agricultureInstructions}\nRespond in ${languageNames[chat.language]}.`,
            }],
          },
          contents: chat.messages,
          generationConfig: { maxOutputTokens: 700 },
        }),
        signal: AbortSignal.timeout(45_000),
      }
    );
  } catch (error) {
    console.error('Gemini request could not be completed:', error.message);
    return jsonResponse(502, { error: 'The AI service could not be reached. Check the server connection and try again.' });
  }

  if (!upstreamResponse.ok) {
    console.error(`Gemini returned HTTP ${upstreamResponse.status}.`);
    if (upstreamResponse.status === 429) {
      return jsonResponse(503, {
        code: 'quota_exceeded',
        error: 'Gemini quota was reached. Check your Google AI Studio billing and usage limits.',
      });
    }
    if ([400, 401, 403, 404].includes(upstreamResponse.status)) {
      return jsonResponse(503, {
        code: 'invalid_configuration',
        error: 'Gemini setup failed. Check GEMINI_API_KEY and GEMINI_MODEL in your hosting settings.',
      });
    }
    return jsonResponse(502, { error: 'The AI service is temporarily unavailable. Please try again shortly.' });
  }

  let result;
  try {
    result = await upstreamResponse.json();
  } catch {
    console.error('Gemini returned an invalid JSON response.');
    return jsonResponse(502, { error: 'The AI service returned an unreadable response. Please try again.' });
  }

  const answer = result?.candidates?.[0]?.content?.parts
    ?.filter((part) => typeof part.text === 'string')
    .map((part) => part.text)
    .join('\n')
    .trim();
  if (!answer) {
    console.error('Gemini returned no text for a chat response.');
    return jsonResponse(502, { error: 'The AI service could not prepare an answer. Please try again.' });
  }

  return jsonResponse(200, { answer });
}
