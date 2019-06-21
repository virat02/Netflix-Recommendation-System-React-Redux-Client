import {connect} from 'react-redux';
import CriticsFollowingComponent from "../components/CriticsFollowingComponent";
import * as actions from "../actions";

const stateToPropertyMapper = state => ({
    criticsFollowed: state.UserReducer.criticsFollowed
});

export const dispatcherToPropsMapper = dispatch => ({
    getCriticsFollowed: username => actions.getCriticsFollowed(dispatch, username),
});

const CriticsFollowingContainer = connect(stateToPropertyMapper,dispatcherToPropsMapper)(CriticsFollowingComponent);

export default CriticsFollowingContainer;