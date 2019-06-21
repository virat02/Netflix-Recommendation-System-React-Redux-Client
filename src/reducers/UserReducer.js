import * as constants from '../constants'

const UserReducer = (state = {followers: [], following: [], criticsFollowed: []}, action) => {

    switch (action.type) {

        case constants.GET_FOLLOWERS:
            return {
                followers: action.followers,
                following: state.following,
                criticsFollowed: state.criticsFollowed
            };

        case constants.GET_FOLLOWING:
            return {
                followers: state.followers,
                following: action.following,
                criticsFollowed: state.criticsFollowed
            };

        case constants.GET_CRITICS_FOLLOWED:
            return {
                followers: state.followers,
                following: state.following,
                criticsFollowed: action.criticsFollowed
            };

        default :
            return state;
    }
};

export default UserReducer;