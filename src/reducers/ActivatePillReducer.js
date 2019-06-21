import * as constants from '../constants'

const defaultState = {
    setFollowerPill: false,
    setFanFollowingPill: false,
    setCriticFollowingPill: false,
    setActorFollowingPill: false,
    setMoviesLikePill: false,
    setMoviesReviewPill: false,
    setMoviesRecommendPill: false
};

const ActivatePillReducer = (state = defaultState, action) => {

    switch (action.type) {

        case constants.ACTIVATE_FOLLOWERS_PILL:
            return {...defaultState, setFollowerPill:true};

        case constants.ACTIVATE_FAN_FOLLOWING_PILL:
            return {...defaultState, setFanFollowingPill:true};

        case constants.ACTIVATE_CRITIC_FOLLOWING_PILL:
            return {...defaultState, setCriticFollowingPill:true};

        case constants.ACTIVATE_ACTOR_FOLLOWING_PILL:
            return {...defaultState, setActorFollowingPill:true};

        case constants.ACTIVATE_MOVIE_LIKE_PILL:
            return {...defaultState, setMoviesLikePill:true};

        case constants.ACTIVATE_MOVIE_REVIEW_PILL:
            return {...defaultState, setMoviesReviewPill:true};

        case constants.ACTIVATE_MOVIE_RECOMMEND_PILL:
            return {...defaultState, setMoviesRecommendPill:true};

        default :
            return state;
    }
};

export default ActivatePillReducer;