import React from 'react';
import md5 from "md5";

import UserService from "../services/userService";
const userService = new UserService();

export default class ProfilePageComponent extends React.Component {

    constructor(props){
        super(props);

        this.state = {
            followClicked: false,
            currentUser: ''
        }
    }

    componentDidMount() {
        userService.getUsers(this.props.match.params.username)
            .then(users => {
                this.setState({
                    currentUser: users[0]
                });
            });

        if(this.state.currentUser.dtype === "Fan"){
            userService.checkIfFanFollowsFan(localStorage.getItem("username"),
                this.state.currentUser.username)
                .then(user => {
                        if (user !== null) {
                            this.setState({
                                followClicked: true
                            })
                        }
                    }
                );
        }

        else if(this.state.currentUser.dtype === "Critic") {

            userService.checkIfFanFollowsCritic(localStorage.getItem("username"),
                this.state.currentUser.username)
                .then(user => {

                        console.log("HERE", user);

                        if (user !== null) {
                            this.setState({
                                followClicked: true
                            })
                        }
                    }
                );
        }
    }

    componentWillReceiveProps(nextProps, nextContext) {
        if(nextProps !== this.props){
            this.setState({
                followClicked: nextProps.followClicked,
                currentUser: nextProps.currentUser
            })
        }
    }

    render() {

        console.log("STATE", this.state);

        let email = this.state.currentUser === '' ? "larry@google.com" : this.state.currentUser.email;
        let image = "https://www.gravatar.com/avatar/"+ md5(email)+"?d=robohash&s=400";

        return(
            <React.Fragment>
                <h1>{this.state.currentUser.firstName} {this.state.currentUser.lastName}</h1>
                <br/>
                <img src={image} alt="Random Profile Image"/>
                {
                    localStorage.getItem("userRole") === "Fan" &&

                    <button className={this.state.followClicked ? "btn btn-success": "btn btn-primary"}
                            onClick={() => this.props.followUser(localStorage.getItem("username"),
                                                                 this.state.currentUser.username)}>
                        {this.state.followClicked ? "Followed" : "Follow"}
                    </button>
                }
            </React.Fragment>
        );
    }
}