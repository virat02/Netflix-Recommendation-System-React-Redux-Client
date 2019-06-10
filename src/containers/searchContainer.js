import React from 'react';
import {connect} from "react-redux";
import SearchComponent from "../components/searchComponent";
import MovieService from "../services/movieService";
const movieService = new MovieService();

const stateToPropertyMapper = state => ({
    movies: state.movies,
    showDetails: state.showDetails
});

const dispatcherToPropertyMapper = dispatch => ({
    searchMovie : movieName => movieService.searchMovieByMovieName(movieName)
            .then(movies =>
                dispatch({
                    type: 'SEARCH_MOVIE',
                    movies: movies
                })
            ),

    getMovieDetails: id => movieService.getMovieDetails(id)
        .then(movie =>
                dispatch({
                    type: "MOVIE_DETAILS",
                    movie: movie
                }))
});

const SearchContainer = connect(stateToPropertyMapper, dispatcherToPropertyMapper)(SearchComponent);

export default SearchContainer;