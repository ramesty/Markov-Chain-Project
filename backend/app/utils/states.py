states = ["flat", "down", "strong down", "up", "strong up"]

states_mapping = {
    0: "flat",
    1: "down",
    2: "strong down",
    3: "up",
    4: "strong up"
}

def assign_state(delta):
    if -0.5 < delta < 0.5:
        return "flat"
    elif -1.5 < delta <= -0.5:
        return "down"
    elif delta <= -1.5:
        return "strong down"
    elif 0.5 <= delta < 1.5:
        return "up"
    elif delta >= 1.5:
        return "strong up"
    else:
        return "undefined"

def define_state(data, row):
    for i in range(row):
        if i == 0:
            data.at[data.index[0], "State"] = "flat"
        else:
            prev_val = data.iloc[i-1]["Open"]
            curr_val = data.iloc[i]["Open"]
            delta = ((curr_val - prev_val) / prev_val) * 100
            data.at[data.index[i], "State"] = assign_state(delta)

