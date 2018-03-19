import React, { Component } from 'react';
import "./profile.css";
// import Photos from "../photos/photos.js";

export default class Profile extends Component {

    render() {
        return (
            <div id="profile-main">
                <div id="user-profile">
                    {this.props.userProfile}
                </div>
                <div id="welcome-logo">
                    {/* <h4>Welcome to:</h4><br /> */}
                    <img src={require("../project-images/logo.png")} className="App-logo" alt="logo" /><br />
                </div>
                {/* <Photos/> */}
                {/* <div id="bozeman-video">
                    <iframe src="https://player.vimeo.com/video/241211849" width="640" height="338" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>
                    <p><a href="https://vimeo.com/241211849">ABOVE BOZEMAN - 4K Drone Film</a> from <a href="https://vimeo.com/kjellredal">Kjell Redal</a> on <a href="https://vimeo.com">Vimeo</a>.</p>
                </div> */}
            </div>
        )
    }
} 
