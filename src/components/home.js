import React from 'react';
import '../css/home.css';
import SearchContainer from "../containers/searchContainer";
import movieReducer from "../reducers/movieReducer";
import {composeWithDevTools} from 'redux-devtools-extension';
import {createStore, applyMiddleware} from "redux";
import {Provider} from "react-redux";
import {BrowserRouter as Router, Route} from "react-router-dom";
import MovieDetailContainer from "../containers/movieDetailContainer";

const movieStore = createStore(movieReducer, composeWithDevTools (
    applyMiddleware(),
    //other store enhancers if any
));

function Home() {
  return (
      <Provider store={movieStore}>
          <Router>
              <Route exact path="/" component={SearchContainer} />
              <Route exact path="/movie/:movieId" component={MovieDetailContainer}/>
          </Router>
      </Provider>

  );
}

export default Home;
