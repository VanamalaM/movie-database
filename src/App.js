import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import LandingPage from "./components/landingPageComponent/landingPage";
import MovieDetail from "./components/movieDetailsComponent/movieDetails";
import { Provider } from "react-redux";
import store from "./redux/store";

function App() {
  return (
    <div>
      <Provider store={store}>
        <Router>
          <div>
            <Switch>
              <Route exact path="/">
                <LandingPage />
              </Route>
              <Route path="/details">
                <MovieDetail />
              </Route>
            </Switch>
          </div>
        </Router>
      </Provider>
    </div>
  );
}

export default App;
