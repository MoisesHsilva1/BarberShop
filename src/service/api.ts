import axios, { AxiosInstance } from "axios";
import Environment from "../config/env";

function getApi(): AxiosInstance {
  return axios.create({
    baseURL: Environment.VITE_API_BASE_URL,
  });
}

export const api = getApi();
