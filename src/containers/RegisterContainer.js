import * as actions from "../actions";
import {connect} from "react-redux";
import RegisterComponent from "../components/RegisterComponent";

const stateToPropertyMapper = state => ({
    firstName: state.RegisterReducer.firstName,
    lastName: state.RegisterReducer.lastName,
    dob: state.RegisterReducer.dob,
    email: state.RegisterReducer.email,
    username: state.RegisterReducer.username,
    password: state.RegisterReducer.password,
    password2: state.RegisterReducer.password2,
    role: state.RegisterReducer.role,
    description: state.RegisterReducer.description,
    successMessageFld: state.RegisterReducer.successMessageFld,
});

export const dispatcherToPropsMapper = dispatch => ({
    changeRegisterFirstName: firstName => actions.changeRegisterFirstName(dispatch, firstName),
    changeRegisterLastName: lastName => actions.changeRegisterLastName(dispatch, lastName),
    changeRegisterDob: dob => actions.changeRegisterDob(dispatch, dob),
    changeRegisterEmail: email => actions.changeRegisterEmail(dispatch, email),
    changeRegisterUsername: username => actions.changeRegisterUsername(dispatch,username),
    changeRegisterPassword: password => actions.changeRegisterPassword(dispatch,password),
    changeRegisterPassword2: password2 => actions.changeRegisterPassword2(dispatch,password2),
    changeRegisterRole: role => actions.changeRegisterRole(dispatch,role),
    changeRegisterDescription: description => actions.changeRegisterDescription(dispatch,description),

    doRegister: (firstName, lastName, dob, email, username,password, password2, role, description) =>
        actions.doRegister(dispatch, firstName, lastName, dob, email, username,password, password2, role, description)
});

const RegisterContainer = connect(stateToPropertyMapper, dispatcherToPropsMapper)(RegisterComponent);

export default RegisterContainer;