import {connect} from 'react-redux';
import * as actions from "../actions";
import MovieDetailsComponent from "../components/MovieDetailsComponent";

const stateToPropertyMapper = state => ({
    movie: state.MoviesReducer.movie,
});

const dispatcherToPropsMapper = dispatch => ({
    getMovieDetails: id => actions.getMovieDetails(dispatch, id)
});

const MovieDetailsContainer = connect(stateToPropertyMapper, dispatcherToPropsMapper)(MovieDetailsComponent);

export default MovieDetailsContainer
