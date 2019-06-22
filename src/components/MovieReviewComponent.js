import React from 'react';
import MovieReviewCardComponent from "./MovieReviewCardComponent";

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
                        <MovieReviewCardComponent
                            className="col-2"
                            getMovieDetails = {this.props.getMovieDetails}
                            currentUsername = {this.props.match.params.username}
                            movie={movie}
                            key={movie.id}/>)
                }
            </div>
        );
    }
}

