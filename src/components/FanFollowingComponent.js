import React from 'react';
import UserListCardComponent from "./UserListCardComponent";

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
                        <UserListCardComponent
                            className="col-2"
                            user={following}
                            currentUsername = {this.props.match.params.username}
                            unfollowUser = {this.props.unfollowUser}
                            key={following.username}/>
                    )
                }

            </div>
        );
    }
}