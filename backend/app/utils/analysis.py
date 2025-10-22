import pandas as pd
import numpy as np
import yfinance as yf
import io
import sys
import contextlib

from .states import define_state, states
from .math import mat_mul, random_walk
from .transition import define_transition, get_transition_matrix

def get_stock_data(ticker_val, period):
    try:
        ticker = yf.Ticker(ticker_val)
        
        # Create a string buffer to capture stderr output
        stderr_buffer = io.StringIO()
        
        with contextlib.redirect_stderr(stderr_buffer):
            data = ticker.history(period=period)
        
        # Check if there was any error message printed
        error_msg = stderr_buffer.getvalue().strip()
        if error_msg:
            return None, f"Error from yfinance: {error_msg}"
        
        if data.empty:
            if not ticker.info or ticker.info.get("regularMarketPrice") is None:
                return None, "Error: Incorrect ticker symbol."
            else:
                return None, "Error: Incorrect or unsupported period."
        
        return data, "Success"
    
    except Exception as e:
        return None, f"An unexpected error occurred: {e}"

def run_analysis( ticker_val, period):

    data, msg = get_stock_data(ticker_val, period)
    if data is None or data.empty:
        return None, msg
    
    row, _ = data.shape
    state_column = [None] * row
    data["State"] = state_column

    transitions_df = pd.DataFrame(
        data=np.zeros((len(states), len(states)), dtype=int),
        index=states,
        columns=states
    )

    define_state(data, row)
    define_transition(data, row, transitions_df)
    transition_matrix = get_transition_matrix(transitions_df)
    steady_state_vector = mat_mul(transition_matrix)
    rnd_wlk = random_walk(transition_matrix, data["State"].iloc[-1], 10)


    result = {
        "transition_matrix": transition_matrix,
        "steady_state_vector": steady_state_vector,
        "random_walk": rnd_wlk
    }

    return result, "success"

