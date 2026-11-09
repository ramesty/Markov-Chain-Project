# Markov Stock Analysis

A small web app that analyzes historical stock prices as a Markov chain. The React frontend sends a ticker and period to the FastAPI backend, which returns a transition matrix, steady-state vector, and sample random walk.

## Run Locally

Start the backend in one terminal:

```sh
cd backend
python3 -m venv .venv
source .venv/bin/activate
python -m pip install -r requirements.txt fastapi uvicorn
uvicorn app.main:app --reload --port 8000
```

Start the frontend in another terminal:

```sh
cd frontend
npm install
npm run dev
```

Open the Vite URL shown in the terminal (usually http://localhost:5173). The backend API documentation is at http://localhost:8000/docs.

## API

- `GET /` returns a basic server health response.
- `GET /stocks/{ticker_name}/{period}` analyzes a ticker, for example `/stocks/AAPL/1mo`.

The stock endpoint returns `transition_matrix`, `steady_state_vector`, and `random_walk` on success. It retrieves historical data from Yahoo Finance through `yfinance`.

## Project Layout

- `frontend/` contains the React, TypeScript, and Vite application.
- `backend/app/` contains the FastAPI routes and Markov analysis.
- `diagrams/` contains project diagrams.

See [frontend/README.md](frontend/README.md) and [backend/README.md](backend/README.md) for service-specific details. Docker files are present, but the local commands above are the supported development setup.