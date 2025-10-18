import { callApi } from "@/services/callApi";

export async function getServerData(route, body, query) {
  const { data, error } = await callApi(route, body, query);
  return { data, error };
}