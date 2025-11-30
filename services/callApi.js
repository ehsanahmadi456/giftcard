import { Instance, isServer } from "./http.service";

export async function callApi(route, body, extraQuery) {
  const config = {
    method: route.method || "GET",
    url: route.path,
    params: { ...(route.query || {}), ...(extraQuery || {}) },
    data: body || undefined,
  };

  try {
    if (isServer) {
  
      const queryParams = new URLSearchParams(config.params).toString();
      const url = `${"https://gift-card.ir"}${config.url}${
        queryParams ? "?" + queryParams : ""
      }`;

      const res = await fetch(url, {
        method: config.method,
        headers: { "Content-Type": "application/json" },
        body: config.method !== "GET" ? JSON.stringify(config.data) : undefined,
        cache: "no-store", 
      });

      const data = await res.json();
      return data;
    } else {

      const res = await Instance.request(config);
      return res.data;
    }
  } catch (err) {
    console.error("callApi error:", err);
    throw err;
  }
}
