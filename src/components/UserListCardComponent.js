import React from 'react';
import {Link} from "react-router-dom";
import "../styles/userCard.css";

export default class UserListCardComponent extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div style={{"margin":"10px"}}>
                <div className="card text-center no-border">
                    <div className="card-body usercard">
                        <h5 className="card-title">{this.props.user.firstName} {this.props.user.lastName}</h5>
                        <p className="card-text">Role: {this.props.user.dtype}</p>
                        <Link to={`/profile/${this.props.user.username}`}
                              className="btn btn-primary user-btn user-btn-primary">
                            See Profile
                        </Link>
                        &nbsp;
                        {
                            (this.props.currentUsername === localStorage.getItem("username")
                                || localStorage.getItem("userRole") === "Admin") &&
                            <button className="btn btn-danger user-btn"
                                    onClick={() => this.props.unfollowUser(this.props.currentUsername,
                                        this.props.user.username)}>
                                Unfollow
                            </button>
                        }
                    </div>
                </div>
            </div>
        );
    }
}