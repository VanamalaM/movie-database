import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import './App.css';
import LandingPage from './components/landingPageComponent/landingPage'
import MovieDetail from './components/movieDetailsComponent/movieDetails'

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/">
            <LandingPage />
          </Route>
          <Route path="/details">
            <MovieDetail />
          </Route>
        </Switch>
      </div>
    </Router>
  )
}

export default App;
