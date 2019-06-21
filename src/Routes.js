import React, {Component} from 'react';
import './Routes.css';

import {Route} from 'react-router-dom';
import LoginContainer from './containers/LoginContainer';
import NavBarContainer from './containers/NavBarContainer';
import FooterContainer from './containers/FooterContainer';
import RegisterContainer from './containers/RegisterContainer';
import HomeContainer from './containers/HomeContainer';
import MovieSearchContainer from './containers/MovieSearchContainer';
import MovieDetailsContainer from "./containers/MovieDetailsContainer";
import UserProfileContainer from "./containers/UserProfileContainer";
import ActorSearchContainer from "./containers/ActorSearchContainer";
import ActorDetailsContainer from "./containers/ActorDetailsContainer";
import UserSearchContainer from "./containers/UserSearchContainer";

export default class Routes extends Component {

    render() {
        return (
            <div>
                <NavBarContainer/>
                <div className={"wbdv-body"}>
                    <Route exact path={"/"} component={HomeContainer}/>
                    <Route exact path={"/home"} component={HomeContainer}/>
                    <Route exact path={"/login"} component={LoginContainer}/>
                    <Route exact path={"/register"} component={RegisterContainer}/>
                    <Route exact path={"/movies"} component={MovieSearchContainer}/>
                    <Route exact path={"/actors"} component={ActorSearchContainer}/>
                    <Route exact path={"/users"} component={UserSearchContainer}/>
                    <Route exact path={"/movie/:movieId"} component={MovieDetailsContainer}/>
                    <Route exact path={"/actor/:actorId"} component={ActorDetailsContainer}/>
                    <Route path={"/profile/:username"} component={UserProfileContainer} />
                </div>
                <FooterContainer/>
            </div>
        )
    }
}