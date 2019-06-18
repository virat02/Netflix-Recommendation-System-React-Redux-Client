import {connect} from 'react-redux';
import * as actions from "../actions";
import LoginComponent from "../components/LoginComponent";

const stateToPropertyMapper = (state) => ({
    username: state.LoginReducer.username,
    password: state.LoginReducer.password
});

const dispatcherToPropsMapper = (dispatch) => ({
    changeUsername: username => actions.changeUsername(dispatch,username),
    changePassword: password => actions.changePassword(dispatch,password),
    doLogin: (username,password) => actions.doLogin(dispatch,username,password)
});

const LoginContainer = connect(stateToPropertyMapper, dispatcherToPropsMapper)(LoginComponent);

export default LoginContainer
