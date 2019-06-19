import {connect} from "react-redux";
import * as actions from "../actions";
import HomeComponent from "../components/HomeComponent";

const stateToPropertyMapper = state => ({
    upcomingMovies: state.MoviesReducer.upcomingMovies,
    nowPlayingMovies: state.MoviesReducer.nowPlayingMovies,
    popularMovies: state.MoviesReducer.popularMovies
});

export const dispatcherToPropsMapper = dispatch => ({
    getUpcomingMovies: () => actions.getUpcomingMovies(dispatch),
    getNowPlayingMovies: () => actions.getNowPlayingMovies(dispatch),
    getPopularMovies: () => actions.getPopularMovies(dispatch)
});

const HomeContainer = connect(stateToPropertyMapper, dispatcherToPropsMapper)(HomeComponent);

export default HomeContainer;