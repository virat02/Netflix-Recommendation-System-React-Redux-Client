import * as constants from '../constants'

const UserReducer = (state = {followers: [], following: []}, action) => {

    switch (action.type) {

        case constants.GET_FOLLOWERS:
            return {
                followers: action.followers,
                following: state.following
            };

        case constants.GET_FOLLOWING:
            return {
                followers: state.followers,
                following: action.following
            };

        default :
            return state;
    }
};

export default UserReducer;