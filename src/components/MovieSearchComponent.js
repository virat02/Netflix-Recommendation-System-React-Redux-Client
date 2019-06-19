import React from 'react';
import MovieCardComponent from "./MovieCardComponent";

export default class MovieSearchComponent extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        //console.log(this.props);
        return (
            <div className="card-columns">
                {
                    this.props.movies.map(movie =>
                        <MovieCardComponent
                            className="col-2"
                            getMovieDetails = {this.props.getMovieDetails}
                            movie={movie}
                            key={movie.id}/>)
                }
            </div>
        );
    }
}

