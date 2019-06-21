import React from 'react';
import ActorCardComponent from "./ActorCardComponent";
import "../styles/actorCard.css";

export default class ActorSearchComponent extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="row">
                {
                    this.props.actors.map(actor =>
                        <ActorCardComponent
                            className="col-2"
                            getActorDetails = {this.props.getActorDetails}
                            actor={actor}
                            key={actor.actorId}/>)
                }
            </div>
        );
    }
}

