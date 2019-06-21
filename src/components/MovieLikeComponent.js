import React from 'react';
import MovieSearchCardComponent from "./MovieSearchCardComponent";

export default class MovieLikeComponent extends React.Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        //console.log("CALLED");
        this.props.getMoviesLiked(this.props.match.params.username);
    }

    render() {
        return (
            <div className="row">
                {
                    this.props.moviesLiked.map(movie =>
                        <MovieSearchCardComponent
                            className="col-2"
                            getMovieDetails = {this.props.getMovieDetails}
                            movie={movie}
                            key={movie.id}/>)
                }
            </div>
        );
    }
}

