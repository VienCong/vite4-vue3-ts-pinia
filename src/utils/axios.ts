import axios, { AxiosResponse, AxiosRequestConfig } from 'axios';
import { resolve } from 'path';

const service = axios.create(); // Request interceptors

service.interceptors.request.use(
  (config: AxiosRequestConfig) => {
    // do something
    return config;
  },
  (error: any) => {
    Promise.reject(error);
  },
); // Response interceptors

service.interceptors.response.use(
  async (response: AxiosResponse) => {
    // do something
    console.log(response);
    return response;
  },
  (error: any) => {
    // do something
    return Promise.reject(error);
  },
);

export default service;
