# Kisaan Sathi AI assistant setup

The assistant and the 22-language site translation feature use Google's Gemini API. The API key is read only by server-side functions; it is never included in website JavaScript.

## Deploy to Netlify (recommended)

1. Create a Gemini API key in [Google AI Studio](https://aistudio.google.com/app/apikey).
2. Put this project in a GitHub repository, then import that repository into [Netlify](https://app.netlify.com/).
3. In Netlify's site build settings, set the publish directory to `.` and leave the build command empty. The included `netlify.toml` configures the functions and routes `/api/chat` and `/api/translate`.
4. In the site's environment-variable settings, add:
   - `GEMINI_API_KEY` — the key from Google AI Studio.
   - `GEMINI_MODEL` — optional; defaults to `gemini-2.5-flash`.
5. Allow the variables for Functions, save, and deploy the site.
6. Open the deployed Netlify URL and test **Ask Agri AI** and a language in the Settings menu.

## Deploy to Vercel

1. Import the same GitHub repository into [Vercel](https://vercel.com/).
2. Keep the project as a static site; no build command or output directory is required.
3. In Project Settings → Environment Variables, add `GEMINI_API_KEY`. Optionally add `GEMINI_MODEL` (default: `gemini-2.5-flash`).
4. Deploy or redeploy, then open the Vercel URL and test **Ask Agri AI** and a language in the Settings menu.

Both hosts include server functions at `/api/chat` and `/api/translate`. The translation function sends the public page's interface text to Gemini when a visitor chooses one of the 22 scheduled Indian languages. Keep the Gemini key in the host's environment-variable settings. Never place a real key in HTML or JavaScript, commit it to Git, or share it in chat. If translation or the assistant reports a quota or configuration error, check the Google AI Studio project, key restrictions, API access, and usage limits.

## Run locally (optional)

1. Install Node.js 20.6 or newer.
2. Copy `.env.example` to `.env` and set `GEMINI_API_KEY` to your Gemini API key.
3. From this folder, run `npm start`.
4. Open `http://localhost:3000`; opening an HTML file directly with `file://` cannot reach the chat or translation endpoints.

The services limit request size and rate and check same-origin requests. The app does not persist chat history. Chat messages are sent to Gemini to generate answers, and public interface text is sent to Gemini when a visitor requests translation; review Google's current data handling terms. The assistant gives general agricultural information, not a diagnosis; confirm crop treatment and time-sensitive advice with a qualified local expert.

Gemini API usage may be subject to Google's quotas and charges. Review the current terms and limits for your Google AI Studio project before sharing the site publicly.
