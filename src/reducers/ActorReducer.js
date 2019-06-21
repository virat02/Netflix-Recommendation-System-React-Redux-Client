import * as constants from '../constants'

const ActorReducer = (state = {actorsFollowed: []}, action) => {

    switch (action.type) {

        case constants.GET_ACTORS_FOLLOWED:
            return {
              actorsFollowed: action.actorsFollowed
            };
        default :
            return state;
    }
};

export default ActorReducer;