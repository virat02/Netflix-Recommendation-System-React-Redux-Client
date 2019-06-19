import * as constants from '../constants'

const movieReducer = (state = {
                                movies: [],
                                searchText: '',
                                movie: ''
                              },
                      action) => {
    switch (action.type) {

        case constants.SEARCH_TEXT_CHANGED:
            return {
                movies: state.movies,
                searchText: action.searchText,
                movie: state.movie
            };

        case constants.SEARCH_MOVIE:
            return {
                movies: action.movies,
                searchText: state.searchText,
                movie: state.movie
            };

        case constants.MOVIE_DETAILS:
            return {
                movies: state.movies,
                searchText: state.searchText,
                movie: action.movie
            };

        default:
            return state;
    }
};

export default movieReducer;