import {connect} from 'react-redux';
import FollowerComponent from "../components/FollowerComponent";
import * as actions from "../actions";

const stateToPropertyMapper = state => ({
    followers: state.UserReducer.followers,
    userRole: state.LocalStorageReducer.localRole
});

export const dispatcherToPropsMapper = dispatch => ({
    getFollowers: (username, userRole) => actions.getFollowers(dispatch, username, userRole),
});

const FollowerContainer = connect(stateToPropertyMapper,dispatcherToPropsMapper)(FollowerComponent);

export default FollowerContainer;