import {connect} from 'react-redux';
import FanFollowingComponent from "../components/FanFollowingComponent";
import * as actions from "../actions";

const stateToPropertyMapper = state => ({
    following: state.UserReducer.following,
});

export const dispatcherToPropsMapper = dispatch => ({
    getFollowing: username => actions.getFollowing(dispatch, username),
    unfollowUser: (username1, username2) => actions.unfollowUser(dispatch, username1, username2)
});

const FanFollowingContainer = connect(stateToPropertyMapper, dispatcherToPropsMapper)(FanFollowingComponent);

export default FanFollowingContainer;