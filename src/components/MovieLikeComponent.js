import React from 'react';
import MovieListCardComponent from "./MovieListCardComponent";

export default class MovieLikeComponent extends React.Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.getMoviesLiked(this.props.match.params.username);
    }

    render() {
        return (
            <div className="row">
                {
                    this.props.moviesLiked.map(movie =>
                        <MovieListCardComponent
                            className="col-2"
                            getMovieDetails = {this.props.getMovieDetails}
                            removeMovieFromList = {this.props.removeMovieFromList}
                            movie={movie}
                            currentUsername = {this.props.match.params.username}
                            key={movie.id}/>)
                }
            </div>
        );
    }
}

