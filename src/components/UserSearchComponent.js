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
                    this.props.users.map(user =>
                        <UserCardComponent
                            className="col-2"
                            user={user}
                            key={user.username}/>)
                }
            </div>
        );
    }
}

