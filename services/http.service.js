import axios from "axios";

const Instance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_BASE || "https://api.example.com",
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
