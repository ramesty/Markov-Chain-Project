import numpy as np

from .states import states_mapping

# Monte Carlo Method
def monte_carlo(trns_prob_mtx):

    steps = 10**6
    start_state = curr_state = 0
    pi = np.array([0, 0, 0, 0, 0])
    pi[start_state] = 1
    A = trns_prob_mtx

    for _ in range(steps):
        curr_state = np.random.choice([0, 1, 2, 3, 4], p = A.loc[states_mapping[curr_state]])
        pi[curr_state]+=1

    return pi

def random_walk(trns_prob_mtx, curr_state, steps):

    prob = 1
    rnd_wlk = [f'State: {curr_state}, probability: {prob}']

    for _ in range(steps):

        states = trns_prob_mtx.columns.tolist()
        probs = trns_prob_mtx.loc[curr_state]
        next_state = np.random.choice(states, p=probs)
        prob *= probs[next_state]

        rnd_wlk.append(f' --> State: {curr_state}, probability: {prob}')

    return "".join(rnd_wlk), prob



# Matrix Multiplication
def mat_mul(trns_prob_mtx):

    steps = 10 ** 3
    A = trns_prob_mtx
    A_n = A

    for i in range(steps):
        A_n = np.matmul(A_n, A)


    return A_n.iloc[0]