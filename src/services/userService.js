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
    getFollowers = username =>
        fetch(baseURL+"/api/follow/fan/"+username+"/fansfollowing")
            .then(response => response.json());

    //Get following
    getFollowing = username =>
        fetch(baseURL+"/api/follow/fan/"+username+"/followedby")
            .then(response => response.json())

}