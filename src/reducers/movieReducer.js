const movieReducer = (state = {
                                movies: [],
                                movie: {},
                                showDetails: false
                              },
                      action) => {
    switch (action.type) {

        case "SEARCH_MOVIE":
            return {
                movies: action.movies,
                movie: state.movie,
                showDetails: state.showDetails
            };

        case "MOVIE_DETAILS":
            return {
                movie: action.movie,
                movies: state.movies,
                showDetails: true
            };

        default:
            return state;
    }
};

export default movieReducer;