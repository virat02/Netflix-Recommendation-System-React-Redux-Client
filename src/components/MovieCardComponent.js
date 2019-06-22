import React from 'react';
import {Link} from "react-router-dom";
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
                    <Link className="details-btn" to={`/movie/${movie.id}`}>
                        {movie.title}
                    </Link>
                </div>
            </div>
        </a>
    </div>;

export default MovieCardComponent;