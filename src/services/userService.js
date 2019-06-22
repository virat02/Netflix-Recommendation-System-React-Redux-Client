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

    //Gets all users existing on the database
    getUsers = username => {
        if(username !== ""){
            return fetch(baseURL+"/api/user?username="+username)
                .then(response => response.json());
        }
        return fetch(baseURL+"/api/user")
            .then(response => response.json());
    };

    //Follow a user
    followUser = (username1, username2) => {
        return this.getUsers(username2)
            .then(users => {

                    //Fan follows Fan
                    if (users[0].dtype === "Fan") {
                        return fetch(baseURL + "/api/follow/fan1/" + username1 + "/fan2/" + username2, {
                            method: 'post',
                            headers: {
                                'content-type': 'application/json'
                            }
                        })
                    }

                    //Fan follows Critic
                    return fetch(baseURL + "/api/follow/fan/" + username1 + "/critic/" + username2, {
                        method: 'post',
                        headers: {
                            'content-type': 'application/json'
                        }
                    });
                }
            )
    };

    //Unfollow a user
    unfollowUser = (username1, username2, user2Role) => {

        //Fan unfollows Fan
        if (user2Role === "Fan") {
            return fetch(baseURL + "/api/unfollow/fan1/" + username1 + "/fan2/" + username2, {
                method: 'post',
                headers: {
                    'content-type': 'application/json'
                }
            })
        }
        //Fan unfollows Critic
        return fetch(baseURL + "/api/unfollow/fan/" + username1 + "/critic/" + username2, {
            method: 'post',
            headers: {
                'content-type': 'application/json'
            }
        })
    };
};