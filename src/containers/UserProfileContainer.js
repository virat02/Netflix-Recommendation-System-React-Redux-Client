import {connect} from 'react-redux';
import UserProfileComponent from "../components/UserProfileComponent";

const stateToPropertyMapper = state => ({
    localUsername: state.LocalStorageReducer.localUsername,
    localRole: state.LocalStorageReducer.localRole
});

export const dispatcherToPropsMapper = dispatch => ({});

const UserProfileContainer = connect(stateToPropertyMapper, dispatcherToPropsMapper)(UserProfileComponent);

export default UserProfileContainer;