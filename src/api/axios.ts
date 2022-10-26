import axios, { AxiosRequestConfig } from "axios";
import { API_KEY, BASE_URL } from "./../types/constants";

export const axiosInstance = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
    "x-api-key": API_KEY ? API_KEY : "",
  },
});

axiosInstance.interceptors.request.use(
  (request: AxiosRequestConfig) => {
    return request;
  },
  (error) => {
    return Promise.reject(error);
  }
);

axiosInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error.response.status === 404) {
    }
    return Promise.reject(error);
  }
);
