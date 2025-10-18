import axios from "axios";

const Instance = axios.create({
  // baseURL: process.env.BASE_URL,
  baseURL: "https://gift-card.ir",
  headers: {
    "Content-Type": "application/json",
  },
});

Instance.interceptors.response.use(
  (response) => response,
  (error) => {
    return Promise.reject(error);
  }
);

export default Instance;
