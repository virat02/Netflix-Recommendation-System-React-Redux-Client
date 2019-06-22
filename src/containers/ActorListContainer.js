import {connect} from 'react-redux';
import ActorListComponent from "../components/ActorListComponent";
import * as actions from "../actions";

const stateToPropertyMapper = state => ({
    actorsFollowed: state.ActorReducer.actorsFollowed
});

export const dispatcherToPropsMapper = dispatch => ({
    getActorsFollowed: username => actions.getActorsFollowed(dispatch, username),
    removeActorFromList: (actorId, username) => actions.removeActorFromList(dispatch, actorId, username)
});

const ActorListContainer = connect(stateToPropertyMapper,dispatcherToPropsMapper)(ActorListComponent);

export default ActorListContainer;