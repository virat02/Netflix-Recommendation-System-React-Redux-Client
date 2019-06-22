import React, {Component} from 'react';
import '../styles/Register.css';

export default class Register extends Component {

    constructor(props) {
        super(props);
        this.state = {
            errorMessageFld: ''
        };

        this.validateFields = this.validateFields.bind(this);
    }
    validateFields(firstName, lastName, dob, email, username, password, password2, role, description) {
        let returnVal = false;
        this.setState(() => {
            return {errorMessageFld: ''}
        });
        if(firstName === '' || lastName === '' || email === '' || dob === '' || username === '' ||
            password === '' || password2 === '' || role === '' || description === '') {
            this.setState(() => {
                return {errorMessageFld: 'All fields are mandatory!'}
            });
        }
        else if(password!==password2){
            this.setState(() => {
                return {errorMessageFld: 'Passwords do not match!'}
            });
        }
        else {
            returnVal = true;
        }
        return returnVal;
    }

    render() {
        let firstNameFld;
        let lastNameFld;
        let dobFld;
        let emailFld;
        let usernameFld;
        let passwordFld;
        let password2Fld;
        let roleFld;
        let descriptionFld;

        return (
            <div className="container-register">
                <div className="card container wbdv-register-container registercard">
                    <form>
                        {this.state.errorMessageFld!=='' &&
                        <span>
                            <div id="errorMessage" className="alert alert-danger" role="alert">
                                {this.state.errorMessageFld}
                            </div>
                        </span>
                        }
                        <div className="form-group row">
                            <label htmlFor="firstNameFld" className="col-sm-3 col-form-label">
                                First Name
                            </label>
                            <div className="col-sm-9">
                                <input className="form-control"
                                       id="firstNameFld"
                                       placeholder='First Name'
                                       value={this.props.firstName}
                                       onChange={() => {this.props.changeRegisterFirstName(firstNameFld.value)}}
                                       ref={node => firstNameFld = node} />
                            </div>
                        </div>

                        <div className="form-group row">
                            <label htmlFor="lastNameFld" className="col-sm-3 col-form-label">
                                Last Name
                            </label>
                            <div className="col-sm-9">
                                <input className="form-control"
                                       id="lastNameFld"
                                       placeholder='Last Name'
                                       value={this.props.lastName}
                                       onChange={() => {this.props.changeRegisterLastName(lastNameFld.value)}}
                                       ref={node => lastNameFld = node} />
                            </div>
                        </div>

                        <div className="form-group row">
                            <label htmlFor="dobFld" className="col-sm-3 col-form-label">
                                D.O.B
                            </label>
                            <div className="col-sm-9">
                                <input className="form-control"
                                       id="dobFld"
                                       placeholder='MM/DD/YYYY'
                                       value={this.props.dob}
                                       onChange={() => {this.props.changeRegisterDob(dobFld.value)}}
                                       ref={node => dobFld = node} />
                            </div>
                        </div>

                        <div className="form-group row">
                            <label htmlFor="emailFld" className="col-sm-3 col-form-label">
                                Email id
                            </label>
                            <div className="col-sm-9">
                                <input className="form-control"
                                       id="emailFld"
                                       placeholder='youremailaddress@example.com'
                                       value={this.props.email}
                                       onChange={() => {this.props.changeRegisterEmail(emailFld.value)}}
                                       ref={node => emailFld = node} />
                            </div>
                        </div>

                        <div className="form-group row">
                            <label htmlFor="usernameFld" className="col-sm-3 col-form-label">
                                Username
                            </label>
                            <div className="col-sm-9">
                                <input className="form-control"
                                       id="usernameFld"
                                       placeholder='Username'
                                       value={this.props.username}
                                       onChange={() => {this.props.changeRegisterUsername(usernameFld.value)}}
                                       ref={node => usernameFld = node} />
                            </div>
                        </div>

                        <div className="form-group row">
                            <label htmlFor="passwordFld" className="col-sm-3 col-form-label">
                                Password </label>
                            <div className="col-sm-9">
                                <input type="password"
                                       className="form-control wbdv-password-fld"
                                       id="passwordFld"
                                       placeholder='Password'
                                       value={this.props.password}
                                       onChange={() => {this.props.changeRegisterPassword(passwordFld.value)}}
                                       ref={node => passwordFld = node}/>
                            </div>
                        </div>

                        <div className="form-group row">
                            <label htmlFor="password2Fld" className="col-sm-3 col-form-label">
                                Confirm Password </label>
                            <div className="col-sm-9">
                                <input type="password"
                                       className="form-control wbdv-password-fld"
                                       id="password2Fld"
                                       placeholder='Verify Password'
                                       value={this.props.password2}
                                       onChange={() => {this.props.changeRegisterPassword2(password2Fld.value)}}
                                       ref={node => password2Fld = node}/>
                            </div>
                        </div>

                        <div className="form-group row">
                            <label htmlFor="roleFld" className="col-sm-3 col-form-label">
                                Role
                            </label>
                            <div className="col-sm-9">
                                <select className="form-control wbdv-role-fld"
                                        id="roleFld"
                                        value={this.props.role}
                                        onChange={() => {this.props.changeRegisterRole(roleFld.value)}}
                                        ref={node => roleFld = node}>
                                    <option value={"Fan"}>Fan</option>
                                    <option value={"Critic"}>Critic</option>
                                </select>
                            </div>
                        </div>

                        <div className="form-group row">
                            <label htmlFor="descriptionFld" className="col-sm-3 col-form-label">
                                Bio </label>
                            <div className="col-sm-9">
                                <textarea className="form-control wbdv-description-fld"
                                          id="descriptionFld"
                                          placeholder='Write a short bio about yourself!'
                                          value={this.props.description}
                                          onChange={() => {this.props.changeRegisterDescription(descriptionFld.value)}}
                                          ref={node => descriptionFld = node}/>
                            </div>
                        </div>

                        <div className="form-group row">
                            <label className="col-sm-3 col-form-label"/>
                            <div className="col-sm-9">
                                <button id="registerUser"
                                        className="btn btn-outline-success btn-block"
                                        type="button"
                                        onClick={()=>{
                                            if(this.validateFields(
                                                this.props.firstName, this.props.lastName,
                                                this.props.dob, this.props.email,
                                                this.props.username, this.props.password,
                                                this.props.password2, this.props.role,
                                                this.props.description)) {

                                                this.props.doRegister(
                                                    this.props.firstName, this.props.lastName,
                                                    this.props.dob, this.props.email,
                                                    this.props.username, this.props.password,
                                                    this.props.password2, this.props.role,
                                                    this.props.description)
                                            }}}>
                                    Register
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}
