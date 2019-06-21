import React from 'react';
import "../styles/movieCard.css";
import "../styles/movieDetails.css";

export default class ActorDetailsComponent extends React.Component {

    constructor(props) {
        super(props);

        console.log(this.props);
    }

    componentDidMount = () =>
        this.props.getActorDetails(this.props.match.params.actorId);

    render() {

        return(
            <div className="container">
                <h1 className="my-4">{this.props.actor.name}</h1>

                <div className="row">

                    <div className="col-md-6">
                        <img className="img-fluid"
                             src={this.props.actor.image}
                             alt="Movie Poster."/>
                    </div>

                    <div className="col-md-6">
                        <h3 className="my-3">Actor Description</h3>
                        <p>{this.props.actor.overview}</p>
                        <h3 className="my-3">Actor Details</h3>
                        {/*<ul>*/}
                        {/*    <li>Runtime: {this.props.actor.runtime}</li>*/}
                        {/*    <li>Release Date: {this.props.actor.releaseDate}</li>*/}
                        {/*    <li>Revenue: {this.props.actor.revenue}</li>*/}
                        {/*    <li>Release status: {this.props.actor.releaseStatus}</li>*/}
                        {/*</ul>*/}

                        <div className="row">
                            <div className="col-sm-12 text-center">
                                {
                                    this.props.localRole === "Fan" &&
                                    <button id="btnLike" className="btn btn-primary btn-md center-block"
                                            onClick={() => this.props.followActor(this.props.actor.id,
                                                this.props.localUsername)}>
                                        Follow
                                    </button>
                                }
                            </div>
                        </div>

                    </div>

                </div>

            </div>
        );
    }

}