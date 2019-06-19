import React, {Component} from 'react';
import "../styles/Home.css";
import MovieContainer from "../containers/MovieContainer";

export default class HomeComponent extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div className="contain">
                <div className="movie-row flex-row flex-nowrap">
                    <div className="row__inner">
                        <MovieContainer />
                    </div>
                </div>
            </div>
    )}
}