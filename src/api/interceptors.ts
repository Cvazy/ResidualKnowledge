import axios, { CreateAxiosDefaults } from "axios";
import { errorCatch } from "@/api/error";

const options: CreateAxiosDefaults = {
  baseURL: process.env.API_URL,
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true,
};

const axiosClassic = axios.create(options);

const axiosWithAuth = axios.create(options);

axiosWithAuth.interceptors.response.use(
  (config) => config,
  async (error) => {
    const originalRequest = error.config;

    if (
      error?.response?.status === 401 ||
      errorCatch(error) === "jwt expired" ||
      (errorCatch(error) === "jwt must be provided" &&
        error.config &&
        !error.config._isRetry)
    ) {
      originalRequest._isRetry = true;

      try {
        // Метод для получения нового токена
        // await authServices.getNewToken();

        return axiosWithAuth.request(originalRequest);
      } catch (error) {
        if (errorCatch(error) === "jwt expired") {
          // Метод для отчистки стора
          // removeFromstorage();
        }
      }
    }

    throw error;
  },
);

export { axiosClassic, axiosWithAuth };
