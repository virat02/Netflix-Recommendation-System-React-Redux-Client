import React from 'react';
import UserListCardComponent from "./UserListCardComponent";

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
                        <UserListCardComponent
                            className="col-2"
                            user={criticFollowing}
                            currentUsername = {this.props.match.params.username}
                            unfollowUser = {this.props.unfollowUser}
                            key={criticFollowing.username}/>
                    )
                }
            </div>
        );
    }
}