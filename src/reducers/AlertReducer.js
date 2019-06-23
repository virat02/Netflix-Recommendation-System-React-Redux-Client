import * as constants from '../constants'

const AlertReducer = (state = {}, action) => {

    switch (action.type) {
        case constants.SUCCESS:
        case constants.ERROR:
        case constants.SET_LIKED_ALERT:
        case constants.SET_RECOMMENDED_ALERT:
        case constants.SET_FOLLOWED_ACTOR_ALERT:
        case constants.SET_FOLLOWED_USER_ALERT:
        case constants.SET_UNFOLLOWED_USER_ALERT:
        case constants.SET_NO_FOLLOWERS_ALERT:
        case constants.SET_NO_FAN_FOLLOWING_ALERT:
        case constants.SET_NO_CRITIC_FOLLOWING_ALERT:
        case constants.SET_NO_ACTORS_FOLLOWED_ALERT:
        case constants.SET_NO_MOVIES_LIKED_ALERT:
        case constants.SET_NO_MOVIES_REVIEWED_ALERT:
        case constants.SET_NO_MOVIES_RECOMMENDED_ALERT:
        case constants.SET_DELETE_RECOMMENDED_MOVIE_ALERT:
        case constants.SET_DELETE_LIKED_MOVIE_ALERT:
        case constants.SET_DELETE_ACTOR_FOLLOWED_ALERT:
        case constants.SET_REMOVE_USER_ALERT:
        case constants.SET_REVIEWED_ALERT:
        case constants.SET_ALREADY_LIKED_ALERT:
        case constants.SET_ALREADY_FOLLOW_ACTOR_ALERT:
        case constants.SET_ALREADY_FOLLOWED_USER_ALERT:
            alert(action.message);
            return state;
        default :
            return state;
    }
};

export default AlertReducer;