import React from 'react';
import MovieSearchCardComponent from "./MovieSearchCardComponent";

export default class MovieRecommendComponent extends React.Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.getMoviesRecommended(this.props.match.params.username);
    }

    render() {
        return (
            <div className="row">
                {
                    this.props.moviesRecommended.map(movie =>
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

