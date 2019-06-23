let singleton = null;
let users = {};
// let baseURL = "http://localhost:8080";
let baseURL = "https://netflix-recommendation-client.herokuapp.com";

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

    //Check if fan follows another fan
    checkIfFanFollowsFan = (username1, username2) =>
        fetch(baseURL+"/api/check/follow/fan1/"+username1+"/fan2/"+username2)
            .then(response =>  response.json());

    //Check if fan follows the critic
    checkIfFanFollowsCritic = (username1, username2) =>
        fetch(baseURL+"/api/check/follow/fan/"+username1+"/critic/"+username2)
            .then(response =>  response.json());

    //Removes a fan from the followers list
    removeFollower = (username1, username2) => {
        return this.getUsers(username1)
            .then(users => {

                if(users[0].dtype === "Fan"){

                    //Remove fan from a fan's follower list
                    return fetch(baseURL+"/api/fan1/"+username1+"/fan2/"+username2, {
                        method: 'delete',
                        headers: {
                            'content-type': 'application/json'
                        }
                    })
                }

                //Remove fan from a critic's follower list
                return fetch(baseURL+"/api/critic/"+username1+"/fan/"+username2, {
                    method: 'delete',
                    headers: {
                        'content-type': 'application/json'
                    }
                })

                }
            )
    };

    //Review a movie
    review = (username, rating, reviewText, movieId) => {
        return fetch(baseURL+"/api/review/critic/"+username+"/movie/"+movieId , {
            method: 'post',
            body: JSON.stringify({
                rating: rating,
                review: reviewText
            }),
            headers: {
                'content-type': 'application/json'
            }
        })
    };

    //Check if fan follows another fan or a critic
    checkIfFanFollowsAnotherUser = (username1, username2) =>

        this.getUsers(username2)
            .then(users =>
                 users[0].dtype === "Fan" ?

                    fetch(baseURL + "/api/check/follow/fan1/"+username1+"/fan2/"+username2)
                        .then(response => response.json())
                    :

                    fetch(baseURL + "/api/check/follow/fan/"+username1+"/critic/"+username2)
                        .then(response => response.json())
            );

    //Delete a user
    deleteUser = userId =>
        fetch(baseURL+"/api/user/"+userId, {
            method: 'delete',
            headers: {
                'content-type': 'application/json'
            }
        })
};