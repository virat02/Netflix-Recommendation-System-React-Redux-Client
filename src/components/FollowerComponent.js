import React from 'react';
import {Link} from "react-router-dom";

export default class FollowerComponent extends React.Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.getFollowers(this.props.match.params.username);
    }

    render() {
        return (
            <div className="row">
                {
                    this.props.followers.map(follower =>
                        <div className="card-body">
                            <h5 className="card-title">{follower.username}</h5>
                            <p className="card-text text-muted">Followers: </p>
                            <p className="card-text text-muted">Following: </p>
                            <Link to={`/profile/${follower.username}`}>
                                See profile
                            </Link>
                        </div>
                    )
                }

            </div>
        );
    }
}