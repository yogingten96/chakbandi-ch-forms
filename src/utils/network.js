import axios from "axios";

export const base_url = "http://13.233.168.11/";

export const api_call = axios.create({
  baseURL: base_url,
  timeout: 300000,
  headers: { "Content-Type": "application/json" },
  validateStatus: (status) => status < 500,
  transformRequest: [
    function (data, headers) {
      return JSON.stringify(data);
    },
  ],
});

const fetchClient = () => {
  let instance = axios.create({
    baseURL: base_url,
    timeout: 300000,
    headers: { "Content-Type": "application/json" },
    validateStatus: (status) => status < 500,
    transformRequest: [
      function (data, headers) {
        return JSON.stringify(data);
      },
    ],
  });
  instance.interceptors.request.use(function (config) {
    const token = JSON.parse(
      localStorage.getItem("chakbandi-form-access-token")
    );
    config.headers.Authorization = token ? `Bearer ${token}` : "";
    return config;
  });
  instance.interceptors.response.use((res) => {
    if (res.status === 401) {
      // localStorage.removeItem("ed_user");
      localStorage.removeItem("chakbandi-form-access-token");
      window.location.reload();
    }
    return res;
  });
  return instance;
};

export const api_call_token = fetchClient();
