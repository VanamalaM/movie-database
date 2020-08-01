import * as actionType from "./actionTypes";
import { getMovieListApi } from "./api";
export function getMovieList({
  searchTerm,
  ratingFilter,
  pageNo,
  latestMovies,
}) {
  return function (dispatch) {
    dispatch({
      type: actionType.FETCH_MOVIES_BEGIN,
    });
    getMovieListApi({ searchTerm, ratingFilter, pageNo, latestMovies })
      .then((res) => {
        dispatch({
          type: actionType.FETCH_MOVIES_SUCCESS,
          payload: res.data,
        });
      })
      .catch((err) => {
        dispatch({
          type: actionType.FETCH_MOVIES_FAIL,
          error: err,
        });
      });
  };
}

export function setMovie(movie) {
  return {
    type: actionType.SELECT_MOVIE_DETAIL,
    payload: movie,
  };
}
