import React from 'react';
import {Link} from "react-router-dom";
import "../css/movieCard.css";

const MovieCardComponent = ({movie}) =>

    <div className="card">
        <img className="card-img-top"
             src={movie.posterUrl}
             alt="Movie Poster."/>
        <div className="card-body">
            <h5 className="card-title">{movie.title}</h5>
            <Link to={`/movie/${movie.id}`}>
                More details
            </Link>
        </div>
    </div>;

export default MovieCardComponent;