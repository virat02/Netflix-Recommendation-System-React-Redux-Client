import React from 'react';
import {Route, Link} from "react-router-dom";

import FollowerContainer from "../containers/FollowerContainer";
import FollowingContainer from "../containers/FollowingContainer";
import ActorListContainer from "../containers/ActorListContainer";
import MoviesLikeContainer from "../containers/MoviesLikeContainer";
import MovieReviewContainer from "../containers/MovieReviewContainer";
import MovieRecommendContainer from "../containers/MovieRecommendContainer";
import CriticsFollowingContainer from "../containers/CriticsFollowingContainer";

export default class UserProfileComponent extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="container">
                <div>
                    <ul className="nav nav-pills">
                        <li className="nav-item"
                            onClick={ this.props.activeFollowerPill}>
                            <Link to={`/profile/${this.props.match.params.username}/followers`}
                               className={this.props.setFollowerPill ? "nav-link active" : "nav-link"} >
                                Followers
                            </Link>
                        </li>
                        {
                            (this.props.localRole === "Fan" || this.props.localRole === "Admin") &&
                            <li className="nav-item"
                                onClick={this.props.activeFanFollowingPill}>
                                <Link to={`/profile/${this.props.match.params.username}/fan/following`}
                                      className={this.props.setFanFollowingPill ? "nav-link active" : "nav-link"}>
                                    Fans You Follow
                                </Link>
                            </li>
                        }
                        {
                            (this.props.localRole === "Fan" || this.props.localRole === "Admin") &&
                          <li className="nav-item"
                              onClick={this.props.activeCriticFollowingPill}>
                              <Link to={`/profile/${this.props.match.params.username}/critic/following`}
                                    className={this.props.setCriticFollowingPill ? "nav-link active" : "nav-link"}>
                                  Critics You Follow
                              </Link>
                          </li>
                        }
                        {
                            (this.props.localRole === "Fan" || this.props.localRole === "Admin") &&
                            <li className="nav-item"
                                onClick={this.props.activeActorFollowingPill}>
                                <Link to={`/profile/${this.props.match.params.username}/actorsFollowed`}
                                      className={this.props.setActorFollowingPill ? "nav-link active" : "nav-link"}>
                                    List Of Actors You Follow
                                </Link>
                            </li>
                        }
                        {
                            (this.props.localRole === "Fan" || this.props.localRole === "Admin") &&
                            <li className="nav-item"
                                onClick={this.props.activeMoviesLikePill}>
                                <Link to={`/profile/${this.props.match.params.username}/moviesLiked`}
                                      className={this.props.setMoviesLikePill ? "nav-link active" : "nav-link"}>
                                    List Of Movies You Like
                                </Link>
                            </li>
                        }
                        {
                            (this.props.localRole === "Critic" || this.props.localRole === "Admin") &&
                            <li className="nav-item"
                                onClick={this.props.activeMoviesReviewPill}>
                                <Link to={`/profile/${this.props.match.params.username}/moviesReviewed`}
                                      className={this.props.setMoviesReviewPill ? "nav-link active" : "nav-link"}>
                                    List Of Movies You Reviewed
                                </Link>
                            </li>
                        }
                        {
                            (this.props.localRole === "Critic" || this.props.localRole === "Admin") &&
                            <li className="nav-item"
                                onClick={this.props.activeMoviesRecommendPill}>
                                <Link to={`/profile/${this.props.match.params.username}/moviesRecommended`}
                                      className={this.props.setMoviesRecommendPill ? "nav-link active" : "nav-link"}>
                                    List Of Movies You Recommended
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