import {connect} from 'react-redux';
import ActorSearchComponent from "../components/ActorSearchComponent";

const stateToPropertyMapper = state => ({
    actors: state.ActorReducer.actors,
});

const dispatcherToPropsMapper = dispatch => ({

});

const ActorSearchContainer = connect(stateToPropertyMapper, dispatcherToPropsMapper)(ActorSearchComponent);

export default ActorSearchContainer
