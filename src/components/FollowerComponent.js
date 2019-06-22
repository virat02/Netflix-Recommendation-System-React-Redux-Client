import React from 'react';
import UserFollowerCardComponent from "./UserFollowerCardComponent";

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
                        <UserFollowerCardComponent
                            className="col-2"
                            user={follower}
                            currentUsername = {this.props.match.params.username}
                            removeUser = {this.props.removeUser}
                            key={follower.username}/>
                    )
                }

            </div>
        );
    }
}