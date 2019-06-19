import React from 'react';
import "../css/movieCard.css";

export default class MovieDetailsComponent extends React.Component {

    constructor(props) {
        super(props);
    }

    componentDidMount = () =>
        this.props.getMovieDetails(this.props.match.params.movieId);

    render() {
        return(
            <div className="container">
                <h1 className="my-4">{this.props.movie.title}</h1>

                <div className="row">

                    <div className="col-md-8">
                        <img className="img-fluid"
                             src={this.props.movie.posterUrl}
                             alt="Movie Poster."/>
                    </div>

                    <div className="col-md-4">
                        <h3 className="my-3">Movie Description</h3>
                        <p>{this.props.movie.overview}</p>
                        <h3 className="my-3">Movie Details</h3>
                        <ul>
                            <li>Runtime: {this.props.movie.runtime}</li>
                            <li>Release Date: {this.props.movie.releaseDate}</li>
                            <li>Revenue: {this.props.movie.revenue}</li>
                            <li>Release status: {this.props.movie.releaseStatus}</li>
                        </ul>
                    </div>

                </div>

            </div>
        );
    }

}