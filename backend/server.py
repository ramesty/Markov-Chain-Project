from fastapi import FastAPI
from utils import run_analysis

app = FastAPI()

@app.get("/")
async def root():
    return {"message" : "Hello world"}

@app.get("/stocks/{ticker_name}/{period}")
async def ticker(ticker_name: str, period: str):

    # return run_analysis(ticker_name, period)

    return run_analysis(ticker_name, period)


    