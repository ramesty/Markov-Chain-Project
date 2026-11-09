# Frontend

React and TypeScript interface for the Markov stock-analysis service, built with Vite.

## Run Locally

Install Node.js and npm, then run from this directory:

```sh
npm install
npm run dev
```

Open the local URL printed by Vite, usually http://localhost:5173. The backend should be running at http://localhost:8000 for stock analysis requests.

## Commands

- `npm run dev` starts the development server with hot reload.
- `npm run build` type-checks and creates a production build in `dist/`.
- `npm run preview` serves the production build locally.
- `npm run lint` runs ESLint.

## Source Layout

- `src/pages/` contains application pages.
- `src/layouts/` and `src/components/` contain the page structure and UI.
- `src/context/` and `src/hooks/` manage shared analysis state.
- `src/api/` and `src/types/` contain API access and response types.
