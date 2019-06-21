import {connect} from 'react-redux';
import UserProfileComponent from "../components/UserProfileComponent";
import * as actions from "../actions";

const stateToPropertyMapper = state => ({
    followers: state.UserReducer.followers,
    following: state.UserReducer.following,
    actorsFollowed: state.ActorReducer.actorsFollowed,
    moviesLiked: state.MoviesReducer.moviesLiked,
    localUsername: state.LocalStorageReducer.localUsername,
    localRole: state.LocalStorageReducer.localRole
});

export const dispatcherToPropsMapper = dispatch => ({
    getFollowers: username => actions.getFollowers(dispatch, username),
    getFollowing: username => actions.getFollowing(dispatch, username),
    getActorsFollowed: username => actions.getActorsFollowed(dispatch, username),
});

const UserProfileContainer = connect(stateToPropertyMapper, dispatcherToPropsMapper)(UserProfileComponent);

export default UserProfileContainer;