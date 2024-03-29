let singleton = null;
let movies = {};
// let baseURL = "http://localhost:8080";
let baseURL = "https://netflix-recommendation-server.herokuapp.com";

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

    //Like a movie
    likeMovie = (movieId, username) => {
        return fetch(baseURL + "/api/like/movie/" + movieId + "/fan/" + username, {
            method: 'post',
            headers: {
                'content-type' : 'application/json'
            }
        })
    };

    //Recommend a movie
    recommendMovie = (movieId, username) => {
        return fetch(baseURL+"/api/recommend/movie/"+movieId+"/critic/"+username, {
            method: 'post',
            headers: {
                'content-type' : 'application/json'
            }
        })
    };

    //Get Movies Liked
    getMoviesLiked = username =>
        fetch(baseURL+"/api/like/fan/"+username+"/moviesliked")
            .then(response => response.json());

    //Get Movies reviewed
    getMoviesReviewed = username =>
        fetch(baseURL+"/api/review/critic/"+username+"/reviewedmovies")
            .then(response => response.json());

    //Get Movies recommended
    getMoviesRecommended = username =>
        fetch(baseURL+"/api/recommend/critic/"+username+"/recommendedmovies")
            .then(response => response.json());

    //Delete recommended movie from critic's recommended movie list
    undoRecommendMovie = (movieId, username) => {
        return fetch(baseURL + "/api/unrecommend/critic/" + username + "/movie/" + movieId, {
            method: 'post',
            headers: {
                'content-type': 'application/json'
            }
        })
    };

    //Delete reviewed movie from critic's reviewed movie list
    deleteReviewedMovie = (movieId, username) => {
        return fetch(baseURL + "/api/review/critic/" + username + "/movie/" + movieId, {
            method: 'delete',
            headers: {
                'content-type': 'application/json'
            }
        })
    };

    //Unlike the movie
    undoLikeMovie = (movieId, username) => {
        return fetch(baseURL + "/api/unlike/fan/"+username+"/movie/"+movieId, {
            method: 'post',
            headers: {
                'content-type': 'application/json'
            }
        })
    };

    //Check if fan likes a movie
    checkIfFanLikesMovie = (username, movieId) =>
        fetch(baseURL + "/api/check/like/fan/"+username+"/movie/"+movieId)
            .then(response => response.json())

}