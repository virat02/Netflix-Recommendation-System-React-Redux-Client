import * as constants from '../constants'

const movieReducer = (state = {
                                movies: [],
                                searchText: '',
                                movie: '',
                                upcomingMovies: [],
                                nowPlayingMovies: [],
                                popularMovies: [],
                                moviesLiked: []
                              },
                      action) => {
    switch (action.type) {

        case constants.SEARCH_TEXT_CHANGED:
            return {
                movies: state.movies,
                searchText: action.searchText,
                movie: state.movie,
                upcomingMovies: state.upcomingMovies,
                nowPlayingMovies: state.nowPlayingMovies,
                popularMovies: state.popularMovies,
                moviesLiked: state.moviesLiked
            };

        case constants.SEARCH_MOVIE:
            return {
                movies: action.movies,
                searchText: state.searchText,
                movie: state.movie,
                upcomingMovies: state.upcomingMovies,
                nowPlayingMovies: state.nowPlayingMovies,
                popularMovies: state.popularMovies,
                moviesLiked: state.moviesLiked
            };

        case constants.MOVIE_DETAILS:
            return {
                movies: state.movies,
                searchText: state.searchText,
                movie: action.movie,
                upcomingMovies: state.upcomingMovies,
                nowPlayingMovies: state.nowPlayingMovies,
                popularMovies: state.popularMovies,
                moviesLiked: state.moviesLiked
            };

        case constants.GET_UPCOMING_MOVIES:
            return {
                movies: state.movies,
                searchText: state.searchText,
                movie: state.movie,
                upcomingMovies: action.upcomingMovies,
                nowPlayingMovies: state.nowPlayingMovies,
                popularMovies: state.popularMovies,
                moviesLiked: state.moviesLiked
            };

        case constants.GET_NOW_PLAYING_MOVIES:
            return {
                movies: state.movies,
                searchText: state.searchText,
                movie: state.movie,
                upcomingMovies: state.upcomingMovies,
                nowPlayingMovies: action.nowPlayingMovies,
                popularMovies: state.popularMovies,
                moviesLiked: state.moviesLiked
            };

        case constants.GET_POPULAR_MOVIES:
            return {
                movies: state.movies,
                searchText: state.searchText,
                movie: state.movie,
                upcomingMovies: state.upcomingMovies,
                nowPlayingMovies: state.nowPlayingMovies,
                popularMovies: action.popularMovies,
                moviesLiked: state.moviesLiked
            };

        case constants.GET_MOVIES_LIKED:
            return {
                movies: state.movies,
                searchText: state.searchText,
                movie: state.movie,
                upcomingMovies: state.upcomingMovies,
                nowPlayingMovies: state.nowPlayingMovies,
                popularMovies: state.popularMovies,
                moviesLiked: action.moviesLiked
            };

        default:
            return state;
    }
};

export default movieReducer;