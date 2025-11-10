import { callApi } from "./callApi";

export async function fetchServerData(route) {
  try {
    const res = await callApi(route);

    if (!res || res.status !== "1") {
      throw new Error("Invalid data or failed request");
    }

    return { data: res.data, error: null };
  } catch (error) {
    return { data: null, error: error.message || "Server error" };
  }
}