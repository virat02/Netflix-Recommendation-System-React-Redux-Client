let singleton = null;
let movies = {};
let baseURL = "http://localhost:8080";
//let baseURL = "https://powerful-bastion-59890.herokuapp.com/";

export default class MovieService {

    constructor() {
        if (!singleton) {
            singleton = this
        }
        this.movies = movies;
    }

    //retrieves all movies which have the movie name on their title
    searchMovieByMovieName = movieName =>
        fetch(baseURL + "/api/search/movies?query=" + movieName)
            .then(response => response.json());

    //Gets the details for a particular movie
    getMovieDetails = movieId =>
        fetch(baseURL + "/api/movies/" + movieId)
            .then(response => response.json());

    //Gets the upcoming movies
    getUpcomingMovies = () =>
        fetch(baseURL+"/api/movies/upcoming")
            .then(response => response.json());

    //Gets now playing movies
    getNowPlayingMovies = () =>
        fetch(baseURL+"/api/movies/now_playing")
            .then(response => response.json());

    //Gets popular movies
    getPopularMovies = () =>
        fetch(baseURL+"/api/movies/popular")
            .then(response => response.json());
}