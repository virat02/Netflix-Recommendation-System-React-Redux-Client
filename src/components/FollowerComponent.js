import React from 'react';
import UserListCardComponent from "./UserListCardComponent";

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
                        <UserListCardComponent
                            className="col-2"
                            user={follower}
                            unfollowUser = {this.props.unfollowUser}
                            key={follower.username}/>
                    )
                }

            </div>
        );
    }
}