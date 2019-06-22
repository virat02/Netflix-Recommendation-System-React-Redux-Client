import React from 'react';
import {Link} from "react-router-dom";

export default class MovieListCardComponent extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="col-md-4">
                <div className="movie-card">
                    <img className="movie-card-image"
                         src={this.props.movie.posterUrl}
                         alt="Movie Poster."/>
                    <div className="button">
                        <Link to={`/movie/${this.props.movie.id}`}>
                            Movie details
                        </Link>
                    </div>
                    {
                        this.props.currentUsername === localStorage.getItem("username") &&
                        <div className="remove-button">
                            <button className="btn btn-danger"
                                    onClick={() => this.props.removeMovieFromList(this.props.movie.id,
                                                                                  this.props.currentUsername)}>
                                Remove
                            </button>
                        </div>
                    }
                </div>
            </div>
        );
    }
}