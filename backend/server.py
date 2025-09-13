from fastapi import FastAPI
from utils import run_analysis

app = FastAPI()

@app.get("/")
async def root():
    return {"message" : "Hello world"}

@app.get("/stocks/{ticker_name}/{period}")
async def ticker(ticker_name: str, period: str):

    transition_matrix, ssd_vector = run_analysis(ticker_name, period)

    return {
        "transition matrix" : transition_matrix,
        "stead state distribution vector" : ssd_vector
    }

    