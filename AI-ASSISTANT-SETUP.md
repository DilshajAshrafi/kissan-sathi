# Kisaan Sathi AI assistant setup

The agriculture assistant uses Google's Gemini API. Website translations are stored in static language catalogs and do not require an AI request or API key.

## Deploy to Netlify (recommended)

1. Create a Gemini API key in [Google AI Studio](https://aistudio.google.com/app/apikey).
2. Put this project in a GitHub repository, then import that repository into [Netlify](https://app.netlify.com/).
3. In Netlify's site build settings, set the publish directory to `.` and leave the build command empty. The included `netlify.toml` configures the chat function.
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

Both hosts provide the `/api/chat` function for the agriculture assistant. Website language changes load the selected local catalog from `translations/`; page text is not sent to Gemini for translation. Keep the Gemini key in the host's environment-variable settings. Never place a real key in HTML or JavaScript, commit it to Git, or share it in chat. If the assistant reports a quota or configuration error, check the Google AI Studio project, key restrictions, API access, and usage limits.

## Run locally (optional)

1. Install Node.js 20.6 or newer.
2. Copy `.env.example` to `.env` and set `GEMINI_API_KEY` to your Gemini API key.
3. From this folder, run `npm start`.
4. Open `http://localhost:3000`; opening an HTML file directly with `file://` cannot reach the chat endpoint. Static language catalogs are local files and require no translation service.

The chat service limits request size and rate and checks same-origin requests. The app does not persist chat history. Chat messages are sent to Gemini to generate answers; public page text is not sent to Gemini for translation. The assistant gives general agricultural information, not a diagnosis; confirm crop treatment and time-sensitive advice with a qualified local expert.

Gemini API usage may be subject to Google's quotas and charges. Review the current terms and limits for your Google AI Studio project before sharing the site publicly.
