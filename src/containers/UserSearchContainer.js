import {connect} from 'react-redux';
import UserSearchComponent from "../components/UserSearchComponent";
import * as actions from "../actions";

const stateToPropertyMapper = state => ({
    users: state.UserReducer.users,
});

const dispatcherToPropsMapper = dispatch => ({
    followUser: (username1, username2) => actions.followUser(dispatch, username1, username2)

});

const UserSearchContainer = connect(stateToPropertyMapper, dispatcherToPropsMapper)(UserSearchComponent);

export default UserSearchContainer
