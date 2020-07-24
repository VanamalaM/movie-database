import * as ActionTypes from "./actionTypes";

function counter(state, action) {
  switch (action.type) {
    case ActionTypes.FETCH_MOVIES_BEGIN:
      return { ...state, movieList: { ...state.movieList, loader: true } };
    case ActionTypes.FETCH_MOVIES_FAIL:
      return {
        ...state,
        movieList: { ...state.movieList, loader: false, error: action.error },
      };
    case ActionTypes.FETCH_MOVIES_SUCCESS:
      return {
        ...state,
        movieList: { data: action.payload, loader: false, error: null },
      };
    case ActionTypes.SELECT_MOVIE_DETAIL:
      return { ...state, movieDetail: action.payload };
    default:
      return state;
  }
}
export default counter;
