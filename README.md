# Panduga Maheswar Reddy · Portfolio

Personal portfolio of an AI/GenAI engineer: React + Vite frontend (Vercel) and an Express API (Render) that powers the contact form and **Synapse**, a Gemini-backed assistant that answers questions about the portfolio.

Live: https://port-folio-frontend-one.vercel.app/

## Structure

| Path | What it is |
| --- | --- |
| `backend/src/data.js` | **Single source of truth** for all content (profile, projects, stack, experience, achievements) |
| `backend/src/server.js` | Express API: `/api/health`, `/api/profile`, `/api/contact`, `/api/chat` |
| `backend/src/chat.js` | Synapse assistant: grounded prompt, streaming Gemini calls with model fallback, offline answers |
| `frontend/src/data.js` | Auto-generated copy of the backend data (do not edit) |
| `frontend/scripts/sync-data.mjs` | Copies the data file; runs automatically before `dev` and `build` |
| `frontend/public/` | Portrait (`img/`), self-hosted fonts (`fonts/`), social preview image, icons |
| `frontend/src/ContactPage.jsx` | The `/contact` page (topic chips, inline validation, thank-you screen) |
| `frontend/vercel.json` | Caching headers, plus the `/contact` route rewrite |
| `archive/` | Original photos, older résumés, and the first HTML version (not deployed) |

## Run locally

```bash
npm install
npm run dev
```

Frontend: http://localhost:5173 · Backend: http://localhost:5000

Copy `frontend/.env.example` and `backend/.env.example` to `.env` to configure the API URL, MongoDB, SMTP email, and `GEMINI_API_KEY`.

## Updating content

1. Edit `backend/src/data.js`.
2. Run `npm run sync-data` (or just `npm run dev` / `npm run build`).
3. Commit **both** `backend/src/data.js` and `frontend/src/data.js`, then redeploy the backend (Render) and frontend (Vercel).

The résumé is intentionally not published on the site; visitors request it by email.

## Assistant (Synapse)

- Answers stream word by word over Server-Sent Events (`POST /api/chat` with `Accept: text/event-stream`); plain JSON still works without that header.
- Models are tried in order with a 9-second "first word" timeout. Default: `gemini-2.5-flash` (fastest in tests), then `gemini-3.5-flash`. Override with `GEMINI_MODELS`.
- If no model answers (or there is no `GEMINI_API_KEY`), a local keyword answerer replies from `data.js`, so the chat never goes silent.
- First questions without history are cached for an hour, so suggestion chips answer instantly.
