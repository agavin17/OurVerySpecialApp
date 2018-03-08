import React, { Component } from 'react';
import './App.css';
import Signinfield from "./signinfield/signinfield.js";

export default class App extends Component {

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src="http://www.theflyingsteamshovel.com/wp-content/uploads/lunch-specials.jpg" className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to Dine-amite!</h1>
        </header>
        <p className="App-intro">
          Login/Signup to view today's lunch specials
        </p>
        <Signinfield/>
        <div className="fb-page" data-href="https://www.facebook.com/Town-Country-Foods-148368425076/" data-tabs="timeline" data-small-header="true" data-adapt-container-width="true" data-hide-cover="true" data-show-facepile="false"><blockquote cite="https://www.facebook.com/Town-Country-Foods-148368425076/" className="fb-xfbml-parse-ignore"><a href="https://www.facebook.com/Town-Country-Foods-148368425076/">Town &amp; Country Foods</a></blockquote></div>
        <div className="fb-page" data-href="https://www.facebook.com/heebsgrocery/" data-tabs="timeline" data-small-header="true" data-adapt-container-width="true" data-hide-cover="true" data-show-facepile="false"><blockquote cite="https://www.facebook.com/heebsgrocery/" className="fb-xfbml-parse-ignore"><a href="https://www.facebook.com/heebsgrocery/">Heeb&#039;s East Main Grocery</a></blockquote></div>
        <div className="fb-page" data-href="https://www.facebook.com/Daves-Sushi-Off-Main-167896217894/" data-tabs="timeline" data-small-header="true" data-adapt-container-width="true" data-hide-cover="true" data-show-facepile="false"><blockquote cite="https://www.facebook.com/Daves-Sushi-Off-Main-167896217894/" className="fb-xfbml-parse-ignore"><a href="https://www.facebook.com/Daves-Sushi-Off-Main-167896217894/">Dave&#039;s Sushi - Off Main</a></blockquote></div>     
      </div>
    );
  }
}
