from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from .utils import run_analysis

app = FastAPI()

# Allow frontend (Vite) on localhost:5173
origins = [
    "http://localhost:5173",
    # You can also allow other domains or use "*" for development
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,            # Or ["*"] to allow all origins (dev only)
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
async def root():
    return {"message" : "Hello world"}

@app.get("/stocks/{ticker_name}/{period}")
async def ticker(ticker_name: str, period: str):

    return run_analysis(ticker_name, period)


    