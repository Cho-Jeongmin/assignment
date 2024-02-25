import axios from "axios";

export const instance = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
  timeout: 5000,
});

instance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    return Promise.reject(error);
  }
);
