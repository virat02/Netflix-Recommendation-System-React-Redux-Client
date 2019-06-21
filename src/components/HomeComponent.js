import React, {Component} from 'react';
import "../styles/Home.css";
import MovieCardComponent from "./MovieCardComponent";

export default class HomeComponent extends Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.getUpcomingMovies();
        this.props.getNowPlayingMovies();
        this.props.getPopularMovies();
    }

    render() {
        return(
            <div className="container-fluid">
                <h3 className="movies-header"> Upcoming Movies </h3>
                <div className="contain">
                    <div className="movie-row flex-row flex-nowrap">
                        <div className="row__inner">
                {
                    this.props.upcomingMovies.map(movie =>
                        <MovieCardComponent
                            className="col-2"
                            getMovieDetails = {this.props.getMovieDetails}
                            movie={movie}
                            key={movie.id}/>)
                }
                        </div>
                    </div>
                </div>

                <h3 className="movies-header"> Now Playing Movies </h3>
                <div className="contain">
                    <div className="movie-row flex-row flex-nowrap">
                        <div className="row__inner">
                    {
                        this.props.nowPlayingMovies.map(movie =>
                            <MovieCardComponent
                                className="col-2"
                                getMovieDetails = {this.props.getMovieDetails}
                                movie={movie}
                                key={movie.id}/>)
                    }
                        </div>
                    </div>
                </div>

                <h3 className="movies-header"> Popular Movies </h3>
                <div className="contain">
                    <div className="movie-row flex-row flex-nowrap">
                        <div className="row__inner">
                    {
                        this.props.popularMovies.map(movie =>
                            <MovieCardComponent
                                className="col-2"
                                getMovieDetails = {this.props.getMovieDetails}
                                movie={movie}
                                key={movie.id}/>)
                    }
                        </div>
                    </div>
                </div>
            </div>
    )}
}