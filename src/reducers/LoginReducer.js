import * as constants from '../constants'

const LoginReducer = (state = {username:'', password: ''}, action) => {

    switch (action.type) {

        case constants.CHANGE_LOGIN_USERNAME:
            return {
                username:action.username,
                password:state.password
            };

        case constants.CHANGE_LOGIN_PASSWORD:
            return {
                username:state.username,
                password:action.password
            };

        case constants.RESET_LOGIN_CREDENTIALS:
            return {
                username:'',
                password:''
            };
        default :
            return state
    }
};

export default LoginReducer;