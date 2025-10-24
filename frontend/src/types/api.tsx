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

export type ApiResponse = [ApiResponseItem, string];


// Define context type
export type DataContextType = {
  data: ApiResponseItem | null;
  loading: boolean;
  error: string | null;
  showError: boolean | null;
  fetchData: () => Promise<void>;
  updateInputPeriod: (period: string) => void;
  updateInputTicker: (ticker: string) => void;
  updateInputWalk: (walks: string) => void;
  updateModal: (bool: boolean) => void;
};


