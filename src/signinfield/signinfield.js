import React, { Component } from 'react';
import "./signinfield.css";
import Signin from "../signin/signin.js";
import Signup from "../signup/signup.js";

export default class Signinfield extends Component {

    render() {
        return (
            <div>
                <div id="signInField">
                    <Signup/>
                    <br/>
                    <Signin/>
                </div>
            </div>
        )
    }
}
