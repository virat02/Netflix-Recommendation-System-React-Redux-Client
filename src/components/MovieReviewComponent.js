import React from 'react';
import MovieSearchCardComponent from "./MovieSearchCardComponent";

export default class MovieReviewComponent extends React.Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.getMoviesReviewed(this.props.match.params.username);
    }

    render() {
        return (
            <div className="row">
                {
                    this.props.moviesReviewed.map(movie =>
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

