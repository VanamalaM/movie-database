import { createStore, compose, applyMiddleware } from "redux";
import counter from "./reducer";
import thunk from "redux-thunk";
const initValue = {
  movieList: { data: [], loader: false, error: null },
  movieDetail: null,
};

const composed = compose(
  applyMiddleware(thunk),
);
let store = createStore(counter, initValue, composed);

export default store;
