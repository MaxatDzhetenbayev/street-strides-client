import axios from "axios";

const $host = axios.create({
  baseURL: import.meta.env.VITE_SERVER_BASE_API + 'api',
});

const $authHost = axios.create({
  baseURL: import.meta.env.VITE_SERVER_BASE_API + 'api',
});

const authInterceptors = (config) => {
  config.headers.authorization = `Bearer ${localStorage.getItem("token")}`;
  return config;
};

$authHost.interceptors.request.use(authInterceptors);

export { $host, $authHost };
