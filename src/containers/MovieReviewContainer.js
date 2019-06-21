import {connect} from 'react-redux';
import MovieReviewComponent from "../components/MovieReviewComponent";
import * as actions from "../actions";

const stateToPropertyMapper = state => ({
    moviesReviewed: state.MoviesReducer.moviesReviewed,
});

const dispatcherToPropsMapper = dispatch => ({
    getMoviesReviewed: username => actions.getMoviesReviewed(dispatch, username)
});

const MovieReviewContainer = connect(stateToPropertyMapper, dispatcherToPropsMapper)(MovieReviewComponent);

export default MovieReviewContainer
