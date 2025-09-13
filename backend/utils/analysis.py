import pandas as pd
import numpy as np
import yfinance as yf

from .states import define_state, states
from .math import mat_mul
from .transition import define_transition, get_transition_matrix

def run_analysis( ticker_val = "AAPL", period = "24mo" ):

    ticker = yf.Ticker(ticker_val)
    data = ticker.history(period=period)
    row, _ = data.shape
    state_column = [None] * row
    data["State"] = state_column

    transitions_df = pd.DataFrame(
        data=np.zeros((len(states), len(states)), dtype=int),
        index=states,
        columns=states
    )

    # Now we want to define state
    define_state(data, row)
    define_transition(data, row, transitions_df)
    transition_matrix = get_transition_matrix(transitions_df)
    steady_state_vector = mat_mul(transition_matrix)

    return transition_matrix, steady_state_vector
