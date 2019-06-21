import * as constants from '../constants'

const ActorReducer = (state = {actorsFollowed: [], actors: [], actor: ''}, action) => {

    switch (action.type) {

        case constants.GET_ACTORS_FOLLOWED:
            return {
                actorsFollowed: action.actorsFollowed,
                actors: state.actors,
                actor: state.actor
            };

        case constants.SEARCH_ACTORS:
            return {
                actorsFollowed: state.actorsFollowed,
                actors: action.actors,
                actor: state.actor
            };

        case constants.ACTOR_DETAILS:
            return {
                actorsFollowed: state.actorsFollowed,
                actors: state.actors,
                actor: action.actor
            };

        default :
            return state;
    }
};

export default ActorReducer;