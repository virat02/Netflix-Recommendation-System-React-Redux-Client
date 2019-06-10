import React from 'react';
import {connect} from "react-redux";
import MovieService from "../services/movieService";
import MovieDetailsComponent from "../components/MovieDetailsComponent";
const movieService = new MovieService();

const stateToPropertyMapper = state => ({
    movie: state.movie
});

const dispatcherToPropertyMapper = dispatch => ({

    getMovieDetails: id => movieService.getMovieDetails(id)
        .then(movie =>
            dispatch({
                type: "MOVIE_DETAILS",
                movie: movie
            }))
});

const MovieDetailContainer = connect(stateToPropertyMapper, dispatcherToPropertyMapper)(MovieDetailsComponent);

export default MovieDetailContainer;