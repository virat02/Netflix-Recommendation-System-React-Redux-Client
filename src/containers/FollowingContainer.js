import {connect} from 'react-redux';
import FollowingComponent from "../components/FollowingComponent";
import * as actions from "../actions";

const stateToPropertyMapper = state => ({
    following: state.UserReducer.following,
});

export const dispatcherToPropsMapper = dispatch => ({
    getFollowing: username => actions.getFollowing(dispatch, username),
});

const FollowingContainer = connect(stateToPropertyMapper, dispatcherToPropsMapper)(FollowingComponent);

export default FollowingContainer;