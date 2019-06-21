import React from 'react';
import "../styles/movieCard.css";

const MovieCardComponent = ({movie}) =>

    <div className="tile">
        <a className="details-btn" href={`/movie/${movie.id}`}>
            <div className="tile__media">
                <img className="tile__img"
                     src={movie.posterUrl} alt="Movie poster."/>
            </div>
            <div className="tile__details">
                <div className="tile__title">
                    <a className="details-btn" href={`/movie/${movie.id}`}>
                        {movie.title}
                    </a>
                </div>
            </div>
        </a>
    </div>;

export default MovieCardComponent;