import Instance from "./http.service";

export async function callApi(route, body, extraQuery) {
  const config = {
    method: route.method,
    url: route.path,
    params: { ...(route.query || {}), ...(extraQuery || {}) },
    data: body || undefined,
  };

  try {
    const res = await Instance.request(config);
    return res.data;
  } catch (err) {
    throw err;
  }
}
