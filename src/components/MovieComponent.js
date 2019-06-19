import React, {Component} from "react";

export default class MovieComponent extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return(
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
        )
    }
}