import axios from "axios";

const isServer = typeof window === "undefined";

let Instance = null;

if (!isServer) {
  Instance = axios.create({
    baseURL: "https://gift-card.ir",
    headers: {
      "Content-Type": "application/json",
    },
  });

  Instance.interceptors.response.use(
    (response) => response,
    (error) => Promise.reject(error)
  );
}

export { Instance, isServer };