// Define the shape of the server response
export type ApiResponse = {
  transition_matrix: number[][];
  steady_state_vector: number[];
  random_walk: number[];
};

// Define context type
export type DataContextType = {
  data: ApiResponse | null;
  loading: boolean;
  error: string | null;
  fetchData: (url: string) => Promise<void>;
  updateInputPeriod: (period: string) => void;
  updateInputTicker: (ticker: string) => void;
};

