import {connect} from 'react-redux';
import UserProfileComponent from "../components/UserProfileComponent";
import * as actions from "../actions";

const stateToPropertyMapper = state => ({
    localUsername: state.LocalStorageReducer.localUsername,
    localRole: state.LocalStorageReducer.localRole,
    setFollowerPill: state.ActivatePillReducer.setFollowerPill,
    setFanFollowingPill: state.ActivatePillReducer.setFanFollowingPill,
    setCriticFollowingPill: state.ActivatePillReducer.setCriticFollowingPill,
    setActorFollowingPill: state.ActivatePillReducer.setActorFollowingPill,
    setMoviesLikePill: state.ActivatePillReducer.setMovieLikePill,
    setMoviesReviewPill: state.ActivatePillReducer.setMoviesReviewPill,
    setMoviesRecommendPill: state.ActivatePillReducer.setMoviesRecommendPill
});

export const dispatcherToPropsMapper = dispatch => ({
    activeFollowerPill: () => actions.activeFollowerPill(dispatch),
    activeFanFollowingPill: () => actions.activeFanFollowingPill(dispatch),
    activeCriticFollowingPill: () => actions.activeCriticFollowingPill(dispatch),
    activeActorFollowingPill : () => actions.activeActorFollowingPill(dispatch),
    activeMoviesLikePill : () => actions.activeMovieLikePill(dispatch),
    activeMoviesReviewPill : () => actions.activeMovieReviewPill(dispatch),
    activeMoviesRecommendPill : () => actions.activeMovieRecommendPill(dispatch)
});

const UserProfileContainer = connect(stateToPropertyMapper, dispatcherToPropsMapper)(UserProfileComponent);

export default UserProfileContainer;