import React from 'react';
import {Route, Link} from "react-router-dom";

import FollowerContainer from "../containers/FollowerContainer";
import FollowingContainer from "../containers/FollowingContainer";
import ActorListContainer from "../containers/ActorListContainer";
import MoviesLikeContainer from "../containers/MoviesLikeContainer";
import MovieReviewContainer from "../containers/MovieReviewContainer";
import MovieRecommendContainer from "../containers/MovieRecommendContainer";
import CriticsFollowingContainer from "../containers/CriticsFollowingContainer";

import UserService from "../services/userService";
const userService = new UserService();

export default class UserProfileComponent extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            userView: ''
        }
    }

    componentDidMount() {
        userService.getUsers(this.props.match.params.username)
            .then(user => {
                this.setState({
                    userView: user[0]
                })
            });
    }

    componentWillReceiveProps(nextProps, nextContext) {

        if(nextProps.match.params.username !== this.state.userView.username){
            userService.getUsers(nextProps.match.params.username)
                .then(user => {
                    this.setState({
                        userView: user[0]
                    })
                });
        }
    }

    render() {

        return (
            <div className="container">
                <div>
                    <ul className="nav nav-pills">
                        <li className="nav-item"
                            onClick={ this.props.activeFollowerPill}>
                            <Link to={`/profile/${this.state.userView.username}/followers`}
                               className={this.props.setFollowerPill ? "nav-link active" : "nav-link"} >
                                {this.state.userView.firstName}'s Followers
                            </Link>
                        </li>
                        {
                            (this.state.userView.dtype === "Fan" || this.props.localRole === "Admin") &&
                            <li className="nav-item"
                                onClick={this.props.activeFanFollowingPill}>
                                <Link to={`/profile/${this.state.userView.username}/fan/following`}
                                      className={this.props.setFanFollowingPill ? "nav-link active" : "nav-link"}>
                                    Fans {this.state.userView.firstName} Followed
                                </Link>
                            </li>
                        }
                        {
                            (this.state.userView.dtype === "Fan" || this.props.localRole === "Admin") &&
                          <li className="nav-item"
                              onClick={this.props.activeCriticFollowingPill}>
                              <Link to={`/profile/${this.state.userView.username}/critic/following`}
                                    className={this.props.setCriticFollowingPill ? "nav-link active" : "nav-link"}>
                                  Critics {this.state.userView.firstName} Followed
                              </Link>
                          </li>
                        }
                        {
                            (this.state.userView.dtype === "Fan" || this.props.localRole === "Admin") &&
                            <li className="nav-item"
                                onClick={this.props.activeActorFollowingPill}>
                                <Link to={`/profile/${this.state.userView.username}/actorsFollowed`}
                                      className={this.props.setActorFollowingPill ? "nav-link active" : "nav-link"}>
                                    List Of Actors {this.state.userView.firstName} Followed
                                </Link>
                            </li>
                        }
                        {
                            (this.state.userView.dtype === "Fan" || this.props.localRole === "Admin") &&
                            <li className="nav-item"
                                onClick={this.props.activeMoviesLikePill}>
                                <Link to={`/profile/${this.state.userView.username}/moviesLiked`}
                                      className={this.props.setMoviesLikePill ? "nav-link active" : "nav-link"}>
                                    List Of Movies {this.state.userView.firstName} Liked
                                </Link>
                            </li>
                        }
                        {
                            (this.state.userView.dtype === "Critic" || this.props.localRole === "Admin") &&
                            <li className="nav-item"
                                onClick={this.props.activeMoviesReviewPill}>
                                <Link to={`/profile/${this.state.userView.username}/moviesReviewed`}
                                      className={this.props.setMoviesReviewPill ? "nav-link active" : "nav-link"}>
                                    List Of Movies {this.state.userView.firstName} Reviewed
                                </Link>
                            </li>
                        }
                        {
                            (this.state.userView.dtype === "Critic" || this.props.localRole === "Admin") &&
                            <li className="nav-item"
                                onClick={this.props.activeMoviesRecommendPill}>
                                <Link to={`/profile/${this.state.userView.username}/moviesRecommended`}
                                      className={this.props.setMoviesRecommendPill ?
                                          "nav-link active" : "nav-link"}>
                                    List Of Movies {this.state.userView.firstName} Recommended
                                </Link>
                            </li>
                        }
                    </ul>

                    <Route exact path={"/profile/:username/followers"} component={FollowerContainer}/>
                    <Route exact path={"/profile/:username/fan/following"} component={FollowingContainer}/>
                    <Route exact path={"/profile/:username/critic/following"} component={CriticsFollowingContainer}/>
                    <Route exact path={"/profile/:username/actorsFollowed"} component={ActorListContainer}/>
                    <Route path={"/profile/:username/moviesLiked"} component={MoviesLikeContainer}/>
                    <Route path={"/profile/:username/moviesReviewed"} component={MovieReviewContainer}/>
                    <Route path={"/profile/:username/moviesRecommended"} component={MovieRecommendContainer}/>
                </div>
            </div>
        );
    }
}