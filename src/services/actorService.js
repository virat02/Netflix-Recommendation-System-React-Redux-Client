let singleton = null;
let actors = {};
let baseURL = "http://localhost:8080";

export default class ActorService {

    constructor() {
        if (!singleton) {
            singleton = this
        }
        this.actors = actors;
    }

    //Get actors followed
    getActorsFollowed = username =>
        fetch(baseURL + "/api/follow/fan/" + username + "/actorfollowed")
            .then(response => response.json());

    //Get all actors
    getActors = actorName =>
        fetch(baseURL + "/api/search/actors?query=" + actorName)
            .then(response => response.json());

    //Gets the details for a particular actor
    getActorDetails = actorId =>
        fetch(baseURL + "/api/actor/" + actorId)
            .then(response => response.json());

    //Follow an actor
    followActor = (actorId, username) =>
        fetch(baseURL + "/api/follow/fan/" + username + "/actor/" + actorId, {
            method: 'post',
            headers: {
                'content-type': 'application/json'
            }
        });

    //Delete an actor from the followed actor's list
    unfollowActor = (actorId, username) =>
        fetch(baseURL+ "/api/unfollow/fan/"+username+"/actor/"+actorId, {
            method: 'post',
            headers: {
                'content-type': 'application/json'
            }
        });

    //Check if fan follows an actor
    checkIfFanFollowsActor = (username, actorId) =>
        fetch(baseURL + "/api/check/follow/fan/"+username+"/actor/"+actorId)
            .then(response => response.json())
}