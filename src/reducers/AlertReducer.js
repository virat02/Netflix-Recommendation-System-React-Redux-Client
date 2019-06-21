import * as constants from '../constants'

const AlertReducer = (state = {}, action) => {

    switch (action.type) {
        case constants.SUCCESS:
        case constants.ERROR:
        case constants.SET_LIKED_ALERT:
        case constants.SET_RECOMMENDED_ALERT:
        case constants.SET_FOLLOWED_ALERT:
            alert(action.message);
            return state;
        default :
            return state;
    }
};

export default AlertReducer;