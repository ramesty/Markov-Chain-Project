# Adds transitions to buckets
def define_transition(data, row, transitions_df):
    for i in range(row):
        if i == 0:
            transitions_df.at['flat', 'flat'] += 1
        else:
            prev_state = data.at[data.index[i - 1], "State"]
            curr_state = data.at[data.index[i], "State"]
            transitions_df.at[prev_state, curr_state] += 1

# Returns Transition Probability Matrix
def get_transition_matrix(transitions_df):
    matrix = transitions_df.div(transitions_df.sum(axis=1), axis=0)
    matrix = matrix.fillna(0)  # Replace NaNs with 0
    return matrix