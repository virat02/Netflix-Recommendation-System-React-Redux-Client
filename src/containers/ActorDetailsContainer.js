import {connect} from 'react-redux';
import * as actions from "../actions";
import ActorDetailsComponent from "../components/ActorDetailsComponent";

const stateToPropertyMapper = state => ({
    actor: state.ActorReducer.actor,
    localUsername: state.LocalStorageReducer.localUsername,
    localRole: state.LocalStorageReducer.localRole,
    showReviewModal: state.ModalReducer.showReviewModal
});

const dispatcherToPropsMapper = dispatch => ({
    getActorDetails: id => actions.getActorDetails(dispatch, id),
    followActor: (actorId, username) => actions.followActor(dispatch, actorId, username),
    showModal: () => actions.showReviewModal(dispatch)
});

const ActorDetailsContainer = connect(stateToPropertyMapper, dispatcherToPropsMapper)(ActorDetailsComponent);

export default ActorDetailsContainer
