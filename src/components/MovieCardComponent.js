import React from 'react';
import "../css/movieCard.css";

const MovieCardComponent = ({movie}) =>

    <div className="col-md-4">
        <div className="movie-card">
            <img
                src={movie.posterUrl}
                alt="Movie Poster."/>
            <div className="button">
                <a href={`/movie/${movie.id}`}>
                    Movie details
                </a>
            </div>
        </div>
    </div>;

export default MovieCardComponent;