import {connect} from 'react-redux';
import MovieLikeComponent from "../components/MovieLikeComponent";
import * as actions from "../actions";

const stateToPropertyMapper = state => ({
    moviesLiked: state.MoviesReducer.moviesLiked,
});

const dispatcherToPropsMapper = dispatch => ({
    getMoviesLiked: username => actions.getMoviesLiked(dispatch, username),
    removeMovieFromList: (movieId, username) => actions.removeLikedMovieFromList(dispatch, movieId, username)
});

const MoviesLikeContainer = connect(stateToPropertyMapper, dispatcherToPropsMapper)(MovieLikeComponent);

export default MoviesLikeContainer
