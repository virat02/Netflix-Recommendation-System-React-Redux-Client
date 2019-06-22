import React from 'react';
import {Link} from "react-router-dom";

export default class ActorCardComponent extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="col-md-4">
                <div className="actor-card">
                    <img className="actor-card-image"
                         src={this.props.actor.profilePicture}
                         alt="Actor Image."/>
                    <div className="button">
                        <Link to={`/actor/${this.props.actor.actorId}`}>
                            {this.props.actor.actorName}
                        </Link>
                    </div>
                    {
                        (this.props.currentUsername === localStorage.getItem("username")
                            || localStorage.getItem("userRole") === "Admin") &&
                           <div className="remove-button">
                               <button className="btn btn-danger"
                                       onClick={() => this.props.unfollowActor(this.props.actor.actorId,
                                                                                     this.props.currentUsername)}>
                                   Remove
                               </button>
                           </div>
                    }
                </div>
            </div>
        );
    }
}