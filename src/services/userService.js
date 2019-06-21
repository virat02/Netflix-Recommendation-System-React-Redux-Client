let singleton = null;
let users = {};
let baseURL = "http://localhost:8080";

export default class UserService {

    constructor() {
        if (!singleton) {
            singleton = this
        }
        this.users = users;
    }

    //Get followers
    getFollowers = (username, userRole) =>
        fetch(baseURL+"/api/follow/"+userRole.toLowerCase()+"/"+username+"/followedby")
            .then(response => response.json());

    //Get following
    getFollowing = (username, userRole) =>
        fetch(baseURL+"/api/follow/"+userRole.toLowerCase()+"/"+username+"/fansfollowing")
            .then(response => response.json());

    //Get list of critics followed by the fan
    getCriticsFollowed = username =>
        fetch(baseURL+"/api/follow/fan/"+username+"/criticfollowed")
            .then(response => response.json());

}