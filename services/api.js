import axios from "axios";
import Cookies from "js-cookie";

const API_URL = "https://gift-card.ir";

const token = Cookies.get("access");

const api = axios.create({
  baseURL: API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

api.interceptors.response.use(
  (response) => {
    return response.data;
  },
  (error) => {
    return error;
  }
);

export default api;
