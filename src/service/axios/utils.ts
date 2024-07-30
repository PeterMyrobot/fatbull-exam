import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';

export const JWT_TOKEN_KEY = 'token';

export function createAxiosInstance() {
  const axiosInstance = axios.create({
    baseURL: process.env.REACT_APP_API_URL,

    timeout: 64000,
  });

  return axiosInstance;
}

export async function axiosResponseInterceptor(
  response: AxiosResponse,
): Promise<AxiosResponse> {
  const { status } = response;

  if (status === 401) {
    // handle 401 error
    localStorage.removeItem(JWT_TOKEN_KEY);
    window.location.href = '/login';
  }
  return response;
}
