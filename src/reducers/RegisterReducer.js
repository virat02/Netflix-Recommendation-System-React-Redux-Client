import * as constants from '../constants'

const RegisterReducer = (state = {
                                    firstName: '',
                                    lastName: '',
                                    dob: '',
                                    email: '',
                                    username: '',
                                    password: '',
                                    password2: '',
                                    role: 'Fan',
                                    description: '',
                                    successMessageFld: ''
                                 }, action) => {

    switch (action.type) {

        case constants.CHANGE_REGISTER_FIRSTNAME:
            return {
                firstName: action.firstName,
                lastName: state.lastName,
                dob: state.dob,
                email: state.email,
                username:state.username,
                password:state.password,
                password2:state.password2,
                role: state.role,
                description: state.description,
                successMessageFld: state.successMessageFld
            };

        case constants.CHANGE_REGISTER_LASTNAME:
            return {
                firstName: state.firstName,
                lastName: action.lastName,
                dob: state.dob,
                email: state.email,
                username:state.username,
                password:state.password,
                password2:state.password2,
                role: state.role,
                description: state.description,
                successMessageFld: state.successMessageFld
            };

        case constants.CHANGE_REGISTER_DOB:
            return {
                firstName: state.firstName,
                lastName: state.lastName,
                dob: action.dob,
                email: state.email,
                username:state.username,
                password:state.password,
                password2:state.password2,
                role: state.role,
                description: state.description,
                successMessageFld: state.successMessageFld
            };

        case constants.CHANGE_REGISTER_EMAIL:
            return {
                firstName: state.firstName,
                lastName: state.lastName,
                dob: state.dob,
                email: action.email,
                username:state.username,
                password:state.password,
                password2:state.password2,
                role: state.role,
                description: state.description,
                successMessageFld: state.successMessageFld
            };

        case constants.CHANGE_REGISTER_USERNAME:
            return {
                firstName: state.firstName,
                lastName: state.lastName,
                dob: state.dob,
                email: state.email,
                username:action.username,
                password:state.password,
                password2:state.password2,
                role: state.role,
                description: state.description,
                successMessageFld: state.successMessageFld
            };
        case constants.CHANGE_REGISTER_PASSWORD:
            return {
                firstName: state.firstName,
                lastName: state.lastName,
                dob: state.dob,
                email: state.email,
                username:state.username,
                password:action.password,
                password2:state.password2,
                role: state.role,
                description: state.description,
                successMessageFld: state.successMessageFld
            };
        case constants.CHANGE_REGISTER_PASSWORD2:
            return {
                firstName: state.firstName,
                lastName: state.lastName,
                dob: state.dob,
                email: state.email,
                username:state.username,
                password:state.password,
                password2:action.password2,
                role: state.role,
                description: state.description,
                successMessageFld: state.successMessageFld
            };
        case constants.CHANGE_REGISTER_ROLE:
            return {
                firstName: state.firstName,
                lastName: state.lastName,
                dob: state.dob,
                email: state.email,
                username:state.username,
                password:state.password,
                password2:state.password2,
                role: action.role,
                description: state.description,
                successMessageFld: state.successMessageFld
            };

        case constants.CHANGE_REGISTER_DESCRIPTION:
            return {
                firstName: state.firstName,
                lastName: state.lastName,
                dob: state.dob,
                email: state.email,
                username:state.username,
                password:state.password,
                password2:state.password2,
                role: state.role,
                description: action.description,
                successMessageFld: state.successMessageFld
            };

        case constants.RESET_REGISTER_CREDENTIALS:
            return {
                firstName: '',
                lastName: '',
                dob: '',
                email: '',
                username: '',
                password: '',
                password2: '',
                role: 'Fan',
                description: '',
                successMessageFld: 'Registration Successful!'
            };
        default :
            return state
    }
};

export default RegisterReducer;