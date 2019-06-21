import * as constants from '../constants'

const ActorReducer = (state = {actorsFollowed: [], actors: []}, action) => {

    switch (action.type) {

        case constants.GET_ACTORS_FOLLOWED:
            return {
                actorsFollowed: action.actorsFollowed,
                actors: state.actors
            };

        case constants.SEARCH_ACTORS:
            return {
                actorsFollowed: state.actorsFollowed,
                actors: action.actors
            };
        default :
            return state;
    }
};

export default ActorReducer;