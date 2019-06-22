import React from 'react';
import Select from 'react-select';
import history from "../History";

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

    componentDidMount() {
        //this.props.getMoviesReviewed(this.props.match.params.username);
    }

    render() {
        return (
            <div className="container-fluid">
                <Select options={ratingOptions}
                        onChange={opt => this.props.changeRating(opt.label)}/>

                <textarea
                    placeholder="Enter your review here!"
                    onChange={(event) => this.props.changeReviewText(event.target.value)}>
                </textarea>

                <button
                    className="btn btn-primary"
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
        );
    }
}

