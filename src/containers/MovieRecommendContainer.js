import {connect} from 'react-redux';
import MovieRecommendComponent from "../components/MovieRecommendComponent";
import * as actions from "../actions";

const stateToPropertyMapper = state => ({
    moviesRecommended: state.MoviesReducer.moviesRecommended,
});

const dispatcherToPropsMapper = dispatch => ({
    getMoviesRecommended: username => actions.getMoviesRecommended(dispatch, username)
});

const MovieRecommendContainer = connect(stateToPropertyMapper, dispatcherToPropsMapper)(MovieRecommendComponent);

export default MovieRecommendContainer
