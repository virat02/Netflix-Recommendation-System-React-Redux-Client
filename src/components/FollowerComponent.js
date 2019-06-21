import React from 'react';
import {Link} from "react-router-dom";

export default class FollowerComponent extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <div className="card-body">
                    <h5 className="card-title">{this.props.match.params.username}</h5>
                    <p className="card-text text-muted">Followers: </p>
                    <p className="card-text text-muted">Following: </p>
                    <Link to={`/profile/${this.props.match.params.username}`}>
                        See profile
                    </Link>
                </div>
            </div>
        );
    }
}