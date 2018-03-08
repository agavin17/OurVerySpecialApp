import React, { Component } from 'react';
import Signin from "../signin/signin.js";
import Signup from "../signup/signup.js";
import "./signinfield.css";

export default class Signinfield extends Component {

    render() {
        return (
            <div>
                <div id="signInField">
                    <Signin />
                    <br />
                    <Signup />
                </div>
            </div>
        )
    }
}
