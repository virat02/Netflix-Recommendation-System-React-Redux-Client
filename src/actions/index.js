import * as constants from '../constants'
import history from '../History'

let baseURL = "http://localhost:8080";

export const doLogin = (dispatch, username, password) => {

    fetch(baseURL+ '/api/login', {
        method: 'post',
        credentials: 'include',
        body: JSON.stringify({
            'username': username,
            'password': password
        }),
        headers: {
            'content-type': 'application/json'
        }
    })
        .then(response => response.status === 200 ? response.json(): null)

        .then(user => {
        if (user === null) {
            dispatch({
                type: constants.ERROR,
                message: "Invalid Credentials"
            })
        } else {
            localStorage.setItem('username', user.username);
            localStorage.setItem('userRole', user.dType);
            dispatch({type: constants.RESET_LOGIN_CREDENTIALS, user: user});
            dispatch({
                type: constants.SET,
                localUsername: user.username,
                localRole: user.dType
            });
            history.push('/');
        }
    })
};

export const logOut = (dispatch) => {

    fetch(baseURL + '/api/logout', {
        credentials: 'include'
    }).then(() => {
        localStorage.removeItem('username');
        localStorage.removeItem('userRole');
        dispatch({
            type: constants.RESET_LOGIN_CREDENTIALS
        });
        dispatch({
            type: constants.RESET
        });
    })

};

export const changeUsername = (dispatch, username) => (
    dispatch({
        type: constants.CHANGE_LOGIN_USERNAME,
        username: username
    })
);

export const changePassword = (dispatch, password) => (
    dispatch({
        type: constants.CHANGE_LOGIN_PASSWORD,
        password: password
    })
);
