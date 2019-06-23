import React from 'react';
import UserCardComponent from "./UserCardComponent";

export default class UserSearchComponent extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="row">
                {
                    this.props.users.filter(user => user.dtype !== "Admin")
                        .map(user =>
                            <UserCardComponent
                                className="col-2"
                                user={user}
                                followUser = {this.props.followUser}
                                deleteUser = {this.props.deleteUser}
                                followClicked = {this.props.followClicked}
                                key={user.username}/>)
                }
            </div>
        );
    }
}

