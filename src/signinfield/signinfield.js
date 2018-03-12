import React, { Component } from 'react';
import "./signinfield.css";
import Signin from "../signin/signin.js";
import Signup from "../signup/signup.js";

export default class Signinfield extends Component {
    constructor(props) {
        super(props);
        this.logOut = this.logOut.bind(this);
    }

   

    render() {
        return (
            <div id= "signInBox">
                <div id="signInField">
                    <Signup />
                    <br />
                    <Signin sendSms={this.props.sendSms} signIn={this.props.signIn} onPasswordChange={this.props.onPasswordChange}
                        onUserChange={this.props.onUserChange} username={this.props.username} password={this.props.password}
                        toggle={this.props.toggle} modal={this.props.modal} stopSms={this.props.stopSms} />
                    <button onClick={this.logOut}>Log Out</button>
                </div>
            </div>
        )
    }
}
