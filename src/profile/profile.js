import React, { Component } from 'react';
import "./profile.css";

export default class Profile extends Component {
    // constructor(props) {
    //     super(props);
    // }

    render() {
        return (
            <div id="profile-main">
                <div id="welcome-logo">
                    <h4>Welcome to:</h4><br />
                    <img src={require("../logo.png")} className="App-logo" alt="logo" /><br />
                </div>
                {this.props.userProfile}
                {/* <div id="profile-box">
                <p>Name</p><br/>
                <p>Number</p>
                <p>Your Subscriptions:<br/>{this.props.tncSubscribe}<br/>{this.props.heebsSubscribe}<br/>{this.props.davesSubscribe}</p>
                <button id="test-sms">Send Test SMS</button>
                    <button onClick={this.props.stopSms}>Stop All Texts</button>
                </div> */}
            </div>
        )
    }
} 
