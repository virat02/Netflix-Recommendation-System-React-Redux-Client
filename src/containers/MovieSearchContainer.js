import {connect} from 'react-redux';
import MovieSearchComponent from "../components/MovieSearchComponent";

const stateToPropertyMapper = state => ({
    movies: state.MoviesReducer.movies,
});

const dispatcherToPropsMapper = dispatch => ({

});

const MovieSearchContainer = connect(stateToPropertyMapper, dispatcherToPropsMapper)(MovieSearchComponent);

export default MovieSearchContainer
