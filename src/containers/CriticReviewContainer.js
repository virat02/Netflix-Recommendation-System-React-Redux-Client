import {connect} from 'react-redux';
import CriticReviewComponent from "../components/CriticReviewComponent";
import * as actions from "../actions";

const stateToPropertyMapper = state => ({
    rating: state.RatingReducer.rating,
    reviewText: state.RatingReducer.reviewText
});

const dispatcherToPropsMapper = dispatch => ({
    changeRating: rating => actions.changeRating(dispatch, rating),
    changeReviewText: reviewText => actions.changeReviewText(dispatch, reviewText),
    doReview: (username, rating, reviewText, movieId) => actions.doReview(dispatch, username, rating, reviewText, movieId)
});

const CriticReviewContainer = connect(stateToPropertyMapper, dispatcherToPropsMapper)(CriticReviewComponent);

export default CriticReviewContainer
