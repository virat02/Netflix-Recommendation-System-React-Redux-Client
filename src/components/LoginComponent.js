import React, {Component} from 'react'
import '../styles/Login.css'

export default class LoginComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            errorMessageFld: ''
        };
        this.validateFields = this.validateFields.bind(this);
    }

    //Method to validate the input fields
    validateFields(username, password)  {
        let returnVal = false;
        this.setState(() => {
            return {errorMessageFld: ''}
        });
        if(username === '' || password === '') {
            this.setState(() => {
                return {errorMessageFld: 'All fields are mandatory!'}
            });
        }
        else {
            returnVal = true;
        }
        return returnVal;
    }

    render() {
        let usernameFld;
        let passwordFld;

        return (
            <div className="container-login container-fluid">
                <div className="card container wbdv-login-container logincard">
                    <form>
                        {
                            this.state.errorMessageFld!=='' &&
                            <span>
                                <div id="errorMessage" className="alert alert-danger" role="alert">
                                    {this.state.errorMessageFld}
                                </div>
                            </span>
                        }
                        <div className="form-group row">
                            <label htmlFor="usernameFld" className="col-sm-3 col-form-label">
                                Username
                            </label>
                            <div className="col-sm-9">
                                <input className="form-control"
                                       id="usernameFld"
                                       placeholder='Username'
                                       value={this.props.username}
                                       onChange={() => {this.props.changeUsername(usernameFld.value)}}
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
                                       onChange={() => {this.props.changePassword(passwordFld.value)}}
                                       ref={node => passwordFld = node}/>
                            </div>
                        </div>
                        <div className="form-group row">
                            <label className="col-sm-3 col-form-label" />
                            <div className="col-sm-9">
                                <button id="loginUser"
                                        className="btn btn-outline-success btn-block"
                                        type="button"
                                        onClick={()=>{
                                            if(this.validateFields(this.props.username,this.props.password))
                                                this.props.doLogin(this.props.username, this.props.password)
                                        }}>
                                    Login
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}