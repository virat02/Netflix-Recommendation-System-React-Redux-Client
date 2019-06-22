import React from 'react';
import Select from 'react-select';
import history from "../History";
import "../styles/criticReview.css";

const ratingOptions = [
    { label: "Excellent", value: 1 },
    { label: "Superb", value: 2 },
    { label: "Nice", value: 3},
    { label: "Fair", value: 4},
    { label: "Good", value: 5}

];

export default class CriticReviewComponent extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="container wbdv-login-container logincard">
                <div style = {{"margin":"10px"}}>
                    <Select className="dropdown-item-l"
                            options={ratingOptions}
                            onChange={opt => this.props.changeRating(opt.label)}/>
                </div>

                <div style = {{"margin":"10px"}}>
                    <textarea
                        className="text-area-width"
                        placeholder="Enter your review here!"
                        onChange={(event) => this.props.changeReviewText(event.target.value)}>
                    </textarea>
                </div>

                <div style = {{"margin":"10px"}} className="btn-submit">
                    <button
                        className="btn btn-info"
                        onClick={() => {
                            history.push("/");
                            this.props.doReview(localStorage.getItem("username"),
                                this.props.rating, this.props.reviewText,
                                this.props.match.params.movieId)
                        }
                        }>
                        Submit
                    </button>
                </div>
            </div>
        );
    }
}

