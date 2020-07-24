import axios from "axios";

const url = "http://localhost:3000";
export function getMovieListApi() {
  return axios.get(`${url}/movieList?_page=1&_limit=8`);
}
