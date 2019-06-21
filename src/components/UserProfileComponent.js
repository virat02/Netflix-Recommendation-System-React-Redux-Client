import React from 'react';
import {Route, Link} from "react-router-dom";

import FollowerComponent from "../components/FollowerComponent";
import ActorListComponent from "../components/ActorListComponent";
import MovieListContainer from "../containers/MovieListContainer";

export default class UserProfileComponent extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="container">
                <div>
                    <ul className="nav nav-pills">
                        <li className="nav-item">
                            <Link to={`/profile/${this.props.match.params.username}/followers`}
                               className="nav-link active">
                                Followers
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to={`/profile/${this.props.match.params.username}/following`}
                               className="nav-link">
                                Following
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to={`/profile/${this.props.match.params.username}/actorsFollowed`}
                               className="nav-link">
                                List Of Actors You Follow
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to={`/profile/${this.props.match.params.username}/moviesLiked`}
                               className="nav-link">
                                List Of Movies You Like
                            </Link>
                        </li>
                    </ul>

                    <Route exact path={"/profile/:username/followers"} component={FollowerComponent}/>
                    <Route exact path={"/profile/:username/following"} component={FollowerComponent}/>
                    <Route exact path={"/profile/:username/actorsFollowed"} component={ActorListComponent}/>
                    <Route path={"/profile/:username/moviesLiked"} component={MovieListContainer}/>
                </div>
            </div>
        );
    }
}