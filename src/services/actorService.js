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
        fetch(baseURL+"/api/follow/fan/"+username+"/actorfollowed")
            .then(response => response.json());

    //Get all actors
    getActors = actorName =>
        fetch(baseURL+"/api/search/actors?query="+actorName)
            .then(response => response.json());

    //Gets the details for a particular actor
    getActorDetails = actorId =>
        fetch(baseURL + "/api/actors/" + actorId)
            .then(response => response.json());
}