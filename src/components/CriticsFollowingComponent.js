import React from 'react';
import {Link} from "react-router-dom";

export default class CriticsFollowingComponent extends React.Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.getCriticsFollowed(this.props.match.params.username);
    }

    render() {
        return (
            <div className="row">
                {
                    this.props.criticsFollowed.map(criticFollowing =>
                        <div className="card-body">
                            <h5 className="card-title">{criticFollowing.username}</h5>
                            <p className="card-text text-muted">Followers: </p>
                            <p className="card-text text-muted">Following: </p>
                            <Link to={`/profile/${criticFollowing.username}`}>
                                See profile
                            </Link>
                        </div>
                    )
                }
            </div>
        );
    }
}