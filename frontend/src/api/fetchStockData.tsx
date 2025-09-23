import type { ApiResponse } from "../types/api";

export const fetchDataFromApi = async (url: string): Promise<ApiResponse> => {
  const res = await fetch(url);
  const json = await res.json();

  if (res.ok && json && json[1] === "success") {
    return json[0];
  } else {
    throw new Error("Failed to fetch or invalid response");
  }
};
