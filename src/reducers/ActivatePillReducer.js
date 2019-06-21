import * as constants from '../constants'

const ActivatePillReducer = (state = {
                                        setFollowerPill: false,
                                        setFanFollowingPill: false,
                                        setCriticFollowingPill: false,
                                        setActorFollowingPill: false,
                                        setMoviesLikePill: false,
                                        setMoviesReviewPill: false,
                                        setMoviesRecommendPill: false
                                     }, action) => {

    switch (action.type) {

        case constants.ACTIVATE_FOLLOWERS_PILL:
            return {
                setFollowerPill: action.setFollowerPill,
                setFanFollowingPill: false,
                setCriticFollowingPill: false,
                setActorFollowingPill: false,
                setMoviesLikePill: false,
                setMoviesReviewPill: false,
                setMoviesRecommendPill: false
            };

        case constants.ACTIVATE_FAN_FOLLOWING_PILL:
            return {
                setFollowerPill: false,
                setFanFollowingPill: action.setFanFollowingPill,
                setCriticFollowingPill: false,
                setActorFollowingPill: false,
                setMoviesLikePill: false,
                setMoviesReviewPill: false,
                setMoviesRecommendPill: false
            };

        case constants.ACTIVATE_CRITIC_FOLLOWING_PILL:
            return {
                setFollowerPill: false,
                setFanFollowingPill: false,
                setCriticFollowingPill: action.setCriticFollowingPill,
                setActorFollowingPill: false,
                setMoviesLikePill: false,
                setMoviesReviewPill: false,
                setMoviesRecommendPill: false
            };

        case constants.ACTIVATE_ACTOR_FOLLOWING_PILL:
            return {
                setFollowerPill: false,
                setFanFollowingPill: false,
                setCriticFollowingPill: false,
                setActorFollowingPill: action.setActorFollowingPill,
                setMoviesLikePill: false,
                setMoviesReviewPill: false,
                setMoviesRecommendPill: false
            };

        case constants.ACTIVATE_MOVIE_LIKE_PILL:
            return {
                setFollowerPill: false,
                setFanFollowingPill: false,
                setCriticFollowingPill: false,
                setActorFollowingPill: false,
                setMoviesLikePill: action.setMoviesLikePill,
                setMoviesReviewPill: false,
                setMoviesRecommendPill: false
            };

        case constants.ACTIVATE_MOVIE_REVIEW_PILL:
            return {
                setFollowerPill: false,
                setFanFollowingPill: false,
                setCriticFollowingPill: false,
                setActorFollowingPill: false,
                setMoviesLikePill: false,
                setMoviesReviewPill: action.setMoviesReviewPill,
                setMoviesRecommendPill: false
            };

        case constants.ACTIVATE_MOVIE_RECOMMEND_PILL:
            return {
                setFollowerPill: false,
                setFanFollowingPill: false,
                setCriticFollowingPill: false,
                setActorFollowingPill: false,
                setMoviesLikePill: false,
                setMoviesReviewPill: false,
                setMoviesRecommendPill: action.setMoviesRecommendPill
            };


        default :
            return state;
    }
};

export default ActivatePillReducer;