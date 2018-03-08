import React, { Component } from 'react';
import Signin from "../signin/signin.js";
// import Signup from "../signup/signup.js";
import "./signinfield.css";
import Signin2 from "../signin/signin2.js";

export default class Signinfield extends Component {

    render() {
        return (
            <div>
                <div id="signInField">
                    {/*<Signup /> */}
                    <Signin2/>
                </div>
            </div>
        )
    }
}
