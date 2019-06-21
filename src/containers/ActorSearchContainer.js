import {connect} from 'react-redux';
import ActorSearchComponent from "../components/ActorSearchComponent";

const stateToPropertyMapper = state => ({
    actors: state.ActorReducer.actors,
});

const dispatcherToPropsMapper = dispatch => ({

});

const MovieSearchContainer = connect(stateToPropertyMapper, dispatcherToPropsMapper)(ActorSearchComponent);

export default MovieSearchContainer
