import React, { Component } from 'react';
import './App.css';
import Signinfield from "./signinfield/signinfield.js";
import Tabs from "./tabs/tabs.js";
import Carousel1 from "./carousel/carousel.js";

export default class App extends Component {


  render() {
    return (
      <div className="App" >
        <div id="page-header">
        <Signinfield id="Signinfield"/>
        <div id="sub-page-header">
          <img src="http://www.theflyingsteamshovel.com/wp-content/uploads/lunch-specials.jpg" className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to Dine-amite!</h1>
          </div>
        </div>
        <Tabs />
      </div>
    );
  }
}
