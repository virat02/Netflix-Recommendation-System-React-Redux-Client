import * as constants from '../constants'

const defaultState = {
    followers: [],
    following: [],
    criticsFollowed: [],
    users: []
};

const UserReducer = (state = defaultState, action) => {

    switch (action.type) {

        case constants.GET_FOLLOWERS:
            return {...defaultState, followers: action.followers};

        case constants.GET_FOLLOWING:
            return {...defaultState, following: action.following};

        case constants.GET_CRITICS_FOLLOWED:
            return {...defaultState, criticsFollowed: action.criticsFollowed};

        case constants.SEARCH_USERS:
            return {...defaultState,users: action.users};

        default :
            return state;
    }
};

export default UserReducer;