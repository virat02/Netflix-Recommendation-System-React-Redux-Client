import * as actions from "../actions";
import {connect} from "react-redux";
import ProfilePageComponent from "../components/ProfilePageComponent";

const stateToPropertyMapper = state => ({
});

export const dispatcherToPropsMapper = dispatch => ({
    followUser: (username1, username2) => actions.followUser(dispatch, username1, username2)
});

const RegisterContainer = connect(stateToPropertyMapper, dispatcherToPropsMapper)(ProfilePageComponent);

export default RegisterContainer;