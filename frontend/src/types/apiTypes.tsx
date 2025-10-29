// Define the shape of the server response
export type TransitionMatrix = {
  [state: string]: {
    [nextState: string]: number;
  };
};

export type SteadyStateVector = {
  [state: string]: number;
};

export type ApiResponseItem = {
  transition_matrix: TransitionMatrix;
  steady_state_vector: SteadyStateVector;
  random_walk: (string | number)[];
};

export const emptyApiResponseItem: ApiResponseItem = {
  transition_matrix: {
    flat: { flat: 0, down: 0, "strong down": 0, up: 0, "strong up": 0 },
    down: { flat: 0, down: 0, "strong down": 0, up: 0, "strong up": 0 },
    "strong down": { flat: 0, down: 0, "strong down": 0, up: 0, "strong up": 0 },
    up: { flat: 0, down: 0, "strong down": 0, up: 0, "strong up": 0 },
    "strong up": { flat: 0, down: 0, "strong down": 0, up: 0, "strong up": 0 },
  },
  steady_state_vector: {
    flat: 0,
    down: 0,
    "strong down": 0,
    up: 0,
    "strong up": 0,
  },
  random_walk: [],
};

export type ApiResponse = [ApiResponseItem, string];


// Define context type
export type DataContextType = {
  data: ApiResponseItem;
  loading: boolean;
  error: string | null;
  showError: boolean | null;
  fetchData: () => Promise<void>;
  updateInputPeriod: (period: string) => void;
  updateInputTicker: (ticker: string) => void;
  updateInputWalk: (walks: string) => void;
  updateModal: (bool: boolean) => void;
};


