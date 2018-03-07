import React, { Component } from 'react';
import './App.css';
import Signinfield from "./signinfield/signinfield.js";
import Textsender from "./textsender/textsender.js";

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
        <Textsender/>
      </div>
    );
  }
}
