import React, {Component} from 'react';
import "../styles/Home.css";

export default class HomeComponent extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div className="contain">
                <div className="movie-row flex-row flex-nowrap">
                    <div className="row__inner">

                        <div className="tile">
                            <div className="tile__media">
                                <img className="tile__img"
                                     src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/70390/show-1.jpg" alt=""/>
                            </div>
                            <div className="tile__details">
                                <div className="tile__title">
                                    Top Gear
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

            </div>
    )}
}