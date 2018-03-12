import React, { Component } from 'react';
import "./profile.css";

export default class Profile extends Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div id="profile-main">
                <div id="welcome-logo">
                    <h4>Welcome to:</h4><br />
                    <img src={require("../logo.png")} className="App-logo" alt="logo" /><br />
                </div>
                <div id="profile-box">
                <p>Name</p><br/>
                <p>Number</p>
                <p>Your Subscriptions:<br/>{this.props.tncSubscribe}</p>
                <button id="test-sms">Send Test SMS</button>
                    <button onClick={this.props.stopSms}>Stop All Texts</button>
                </div>
            </div>
        )
    }
} 
