import React from 'react';
import ActorCardComponent from "./ActorCardComponent";

export default class ActorListComponent extends React.Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.getActorsFollowed(this.props.match.params.username);
    }

    render() {

        console.log(this.props.actorsFollowed);

        return (
            <div className="row">
                {
                    this.props.actorsFollowed.map(actor =>
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