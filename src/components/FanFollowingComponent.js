import React from 'react';
import {Link} from "react-router-dom";

export default class FanFollowingComponent extends React.Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.getFollowing(this.props.match.params.username);
    }

    render() {
        return (
            <div className="row">
                {
                    this.props.following.map(following =>
                        <div className="card-body">
                            <h5 className="card-title">{following.username}</h5>
                            <p className="card-text text-muted">Followers: </p>
                            <p className="card-text text-muted">Following: </p>
                            <Link to={`/profile/${following.username}`}>
                                See profile
                            </Link>
                        </div>
                    )
                }

            </div>
        );
    }
}