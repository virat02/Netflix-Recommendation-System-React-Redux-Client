import {connect} from 'react-redux';
import * as actions from "../actions";
import MovieDetailsComponent from "../components/MovieDetailsComponent";

const stateToPropertyMapper = state => ({
    movie: state.MoviesReducer.movie,
    localUsername: state.LocalStorageReducer.localUsername,
    localRole: state.LocalStorageReducer.localRole,
    showReviewModal: state.ModalReducer.showReviewModal
});

const dispatcherToPropsMapper = dispatch => ({
    getMovieDetails: id => actions.getMovieDetails(dispatch, id),
    likeMovie: (movieId, username) => actions.likeMovie(dispatch, movieId, username),
    recommendMovie: (movieId, username) => actions.recommendMovie(dispatch, movieId, username),
    reviewMovie: (movieId, username) => actions.reviewMovie(dispatch, movieId, username),
    showModal: () => actions.showReviewModal(dispatch)
});

const MovieDetailsContainer = connect(stateToPropertyMapper, dispatcherToPropsMapper)(MovieDetailsComponent);

export default MovieDetailsContainer
