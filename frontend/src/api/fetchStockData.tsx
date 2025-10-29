import type { ApiResponse, ApiResponseItem } from "../types/apiTypes";

export const fetchDataFromApi = async (url: string): Promise<ApiResponseItem> => {
  const res = await fetch(url);
  const json = await res.json();

  if (res.ok && json && json[1] === "success") {
    return json[0];
  } else {
    throw new Error("Failed to fetch or invalid response");
  }
};
