import {connect} from 'react-redux';
import FollowerComponent from "../components/FollowerComponent";
import * as actions from "../actions";

const stateToPropertyMapper = state => ({
    followers: state.UserReducer.followers,
    userRole: state.LocalStorageReducer.localRole
});

export const dispatcherToPropsMapper = dispatch => ({
    getFollowers: (username) => actions.getFollowers(dispatch, username),
    removeUser: (username1, username2) => actions.removeFollower(dispatch, username1, username2)
});

const FollowerContainer = connect(stateToPropertyMapper,dispatcherToPropsMapper)(FollowerComponent);

export default FollowerContainer;