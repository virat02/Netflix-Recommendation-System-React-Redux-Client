import React from 'react';
import {Link} from "react-router-dom";

export default class UserCardComponent extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="card-body">
                <h5 className="card-title">{this.props.user.username}</h5>
                <p className="card-text text-muted">Followers: </p>
                <p className="card-text text-muted">Following: </p>
                <Link to={`/profile/${this.props.user.username}`}>
                    See profile
                </Link>
            </div>
        );
    }
}