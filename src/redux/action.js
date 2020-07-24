import * as actionType from "./actionTypes";
import { getMovieListApi } from "./api";
export function getMovieList() {
  return function (dispatch) {
    dispatch({
      type: actionType.FETCH_MOVIES_BEGIN,
    });
    getMovieListApi()
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
