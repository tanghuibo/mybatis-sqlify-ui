import axios from "axios";

const axiosInstance = axios.create();

axiosInstance.interceptors.response.use(response => {
  let { data } = response;
  if (data.success) {
    return data;
  } else {
    console.error(response);
    throw data;
  }
});

export default axiosInstance;
