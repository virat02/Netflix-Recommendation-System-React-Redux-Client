import React from 'react';
import ActorCardComponent from "./ActorCardComponent";
import "../styles/actorCard.css";

export default class ActorListComponent extends React.Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.getActorsFollowed(this.props.match.params.username);
    }

    render() {

        return (
            <div className="row">
                {
                    this.props.actorsFollowed.map(actor =>
                        <ActorCardComponent
                            className="col-2"
                            getActorDetails = {this.props.getActorDetails}
                            actor={actor}
                            removeActorFromList = {this.props.removeActorFromList}
                            currentUsername = {this.props.match.params.username}
                            key={actor.actorId}/>)
                }
            </div>
        );
    }
}