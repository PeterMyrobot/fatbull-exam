import { createAxiosInstance, axiosResponseInterceptor } from './utils';

const axiosInstance = createAxiosInstance();

axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => axiosResponseInterceptor(error),
);
export default axiosInstance;
