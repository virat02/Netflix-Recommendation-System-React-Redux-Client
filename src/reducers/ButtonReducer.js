import * as constants from '../constants'

const ButtonReducer = (state = {followedUser: []}, action) => {

    switch (action.type) {
        case constants.SET_FOLLOW_BUTTON:
            return{
                followedUser: action.followedUser
            };

        default:
            return state;
    }
};

export default ButtonReducer;