import axios from "axios";

const url = "http://localhost:3000";
export function getMovieListApi({ searchTerm, ratingFilter, pageNo, latestMovies }) {
  const apiurl = `${url}/movieList`;
  const params = [];
  const searchQuery = (searchTerm && `q=${searchTerm}`) || "";
  const ratingQuery = (ratingFilter && `rating=${ratingFilter}`) || "";
  const latestMovieQuery = (latestMovies && `_sort=Release_date&_order=desc`) || "";
  const pageNoQuery =
    (pageNo !== undefined && `_page=${pageNo}&_limit=4`) || "";
  if (searchQuery) params.push(searchQuery);
  if (ratingQuery) params.push(ratingQuery);
  if (pageNoQuery) params.push(pageNoQuery);
  if (latestMovieQuery) params.push(latestMovieQuery);
  const queries = params.join("&");
  const queryUrl = apiurl + (queries ? `?${queries}` : "");

  return axios.get(queryUrl);
}
