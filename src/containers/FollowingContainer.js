import {connect} from 'react-redux';
import FollowingComponent from "../components/FollowingComponent";
import * as actions from "../actions";

const stateToPropertyMapper = state => ({
    following: state.UserReducer.following,
    userRole: state.LocalStorageReducer.localRole
});

export const dispatcherToPropsMapper = dispatch => ({
    getFollowing: (username, userRole) => actions.getFollowing(dispatch, username, userRole),
});

const FollowingContainer = connect(stateToPropertyMapper, dispatcherToPropsMapper)(FollowingComponent);

export default FollowingContainer;