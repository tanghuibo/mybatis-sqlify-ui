import axios from "./plugins/axiosPlugin";

export function sqlify(mybatisSql, param) {
  return axios.post("/sqlify/process", {
    mybatisSql,
    param
  });
}
