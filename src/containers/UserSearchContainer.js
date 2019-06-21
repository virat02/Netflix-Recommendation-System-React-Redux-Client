import {connect} from 'react-redux';
import UserSearchComponent from "../components/UserSearchComponent";

const stateToPropertyMapper = state => ({
    users: state.UserReducer.users,
});

const dispatcherToPropsMapper = dispatch => ({

});

const UserSearchContainer = connect(stateToPropertyMapper, dispatcherToPropsMapper)(UserSearchComponent);

export default UserSearchContainer
