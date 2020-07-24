import { createStore, compose, applyMiddleware } from "redux";
import counter from "./reducer";
import thunk from "redux-thunk";
const initValue = {
  movieList: { data: [], loader: false, error: null },
  movieDetail: {},
};

const composed = compose(
  applyMiddleware(thunk),
  window["__REDUX_DEVTOOLS_EXTENSION__"] &&
    window["__REDUX_DEVTOOLS_EXTENSION__"]()
);
let store = createStore(counter, initValue, composed);

export default store;
