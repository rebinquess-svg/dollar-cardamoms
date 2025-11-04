# Dollar Cardamoms — Deploy to Netlify (Static Hosting)

This project is a Vite + React + TypeScript single-page app using **HashRouter** (no special redirects required).

## Quick Deploy (Git-connected)

1. Create a new GitHub repository and push this project.
2. Go to Netlify → **Add new site** → **Import an existing project**.
3. Select your repo.
4. Build settings:
   - **Base directory**: `./` (blank)
   - **Build command**: `npm run build`
   - **Publish directory**: `dist`
   - **Node version**: 20
5. Click **Deploy**.

> Netlify will install dependencies and build automatically. Your site will be available at a Netlify subdomain.

## Local Build & Drag‑and‑Drop

1. Install Node.js 20 LTS.
2. In the project folder, run:
   ```bash
   npm install
   npm run build
   ```
3. This creates a `dist/` folder. Zip the contents of `dist/` and drag‑and‑drop into Netlify **(Sites → Deploys → Upload a folder)**.

## Notes

- We added a minimal `index.css` and `favicon.svg` to avoid 404s in production.
- `index.tsx` uses `createRoot` from `react-dom/client` (React 18/19 compatible).
- `HashRouter` means you don't need `_redirects` for client-side routes.
- If you add environment variables, set them in Netlify → **Site settings → Environment variables**.

### Commands

- `npm run dev` — Run locally
- `npm run build` — Production build
- `npm run preview` — Preview the build locally
