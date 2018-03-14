import React, { Component } from 'react';
import "./profile.css";

export default class Profile extends Component {

    render() {
        return (
            <div id="profile-main">
                <div id="user-profile">
                    {this.props.userProfile}
                </div>
                <div id="welcome-logo">
                    <h4>Welcome to:</h4><br />
                    <img src={require("../project-images/logo.png")} className="App-logo" alt="logo" /><br />
                </div>
            </div>
        )
    }
} 
