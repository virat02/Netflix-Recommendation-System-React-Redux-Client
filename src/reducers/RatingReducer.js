import * as constants from '../constants'

const RatingReducer = (state = {rating: ''}, action) => {

    switch (action.type) {
        case constants.CHANGE_RATING:
            return{
                rating: action.rating,
                reviewText: state.reviewText
            };

        case constants.CHANGE_REVIEW_TEXT:
            return {
                rating: state.rating,
                reviewText: action.reviewText
            };

        default:
            return state;
    }
};

export default RatingReducer;