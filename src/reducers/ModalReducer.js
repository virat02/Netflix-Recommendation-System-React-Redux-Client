import * as constants from '../constants'

const ModalReducer = (state = {showReviewModal: false}, action) => {

    switch (action.type) {
        case constants.SHOW_REVIEW_MODAL:
            return {
                showReviewModal: action.showReviewModal
            };
        default :
            return state
    }
};

export default ModalReducer;
