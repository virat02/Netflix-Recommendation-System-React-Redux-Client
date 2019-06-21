import React from 'react';
import MovieSearchCardComponent from "./MovieSearchCardComponent";
import "../styles/movieCard.css";

export default class MovieSearchComponent extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="row">
                {
                    this.props.movies.map(movie =>
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

