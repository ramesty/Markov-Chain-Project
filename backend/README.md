# Backend

FastAPI service that downloads historical stock data with `yfinance` and calculates a Markov transition matrix, steady-state vector, and random walk.

## Run Locally

From this directory, create and activate a virtual environment, then install the dependencies and start the API:

```sh
python3 -m venv .venv
source .venv/bin/activate
python -m pip install -r requirements.txt fastapi uvicorn
uvicorn app.main:app --reload --port 8000
```

Interactive API documentation: http://localhost:8000/docs

## Endpoints

- `GET /` returns `{"message":"Hello world"}`.
- `GET /stocks/{ticker_name}/{period}` returns stock analysis. Example: `GET /stocks/AAPL/1mo`.

Successful analysis includes `transition_matrix`, `steady_state_vector`, and `random_walk`. The frontend's local origin (`http://localhost:5173`) is allowed by CORS.

## Dependencies

`requirements.txt` contains the data-analysis dependencies. FastAPI and Uvicorn are also required to run the service and are installed in the command above.