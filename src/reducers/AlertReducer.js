import * as constants from '../constants'

const AlertReducer = (state = {}, action) => {

    switch (action.type) {
        case constants.SUCCESS:
            alert(action.message);
            return state;
        case constants.ERROR:
            alert(action.message);
            return state;
        case constants.SET_LIKED_ALERT:
            alert(action.message);
            return state;
        case constants.SET_RECOMMENDED_ALERT:
            alert(action.message);
            return state;
        default :
            return state;
    }
};

export default AlertReducer;