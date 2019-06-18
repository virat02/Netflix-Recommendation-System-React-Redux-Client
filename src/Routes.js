import React, {Component} from 'react';
import './Routes.css';
import {Route} from 'react-router-dom';
import LoginContainer from './containers/LoginContainer';
import NavBarContainer from './containers/NavBarContainer';
import FooterContainer from './containers/FooterContainer';


export default class Routes extends Component {
    render() {
        return (
            <div>
                <NavBarContainer/>
                <div className={"wbdv-body"}>
                    {/*<Route exact path={"/"} component={HomeContainer}/>*/}
                    {/*<Route exact path={"/home"} component={HomeContainer}/>*/}
                    <Route exact path={"/login"} component={LoginContainer}/>
                </div>
                <FooterContainer/>
            </div>
        )
    }
}