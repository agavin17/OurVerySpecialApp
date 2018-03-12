import React, { Component } from 'react';
import './App.css';
import Signinfield from "./signinfield/signinfield.js";
import Tabs from "./tabs/tabs.js";
import axios from "axios";
import Navbar2 from "./navbar/navbar.js";
// import Carousel1 from "./carousel/carousel.js";

export default class App extends Component {
  constructor() {
    super()
    this.sendSms = this.sendSms.bind(this);
    this.sendTnCText = this.sendTnCText.bind(this);
    this.signIn = this.signIn.bind(this);
    this.onPasswordChange = this.onPasswordChange.bind(this);
    this.onUserChange = this.onUserChange.bind(this);
    this.toggle = this.toggle.bind(this);
    this.stopSms = this.stopSms.bind(this);
    this.sendDavesText = this.sendDavesText.bind(this);
    this.sendHeebsText =this.sendHeebsText.bind(this);
    this.state = {
      number: "",
      password: "",
      modal: false,
      userWelcome: "",
      tncSubscribe:""
    }
  }

  sendSms() {
    axios.post("/text", { number: this.state.number, token: localStorage.getItem("token") }).then((result) => {
      console.log(result.data)
    })
  }

  sendTnCText() {
    axios.post("/textTnC", { number: this.state.number, token: localStorage.getItem("token") }).then((result) => {
      console.log(result.data)
    })
  }

  sendHeebsText() {
    axios.post("/textHeebs", { number: this.state.number, token: localStorage.getItem("token") }).then((result) => {
      console.log(result.data)
    })
  }

  sendDavesText() {
    axios.post("/textDaves", { number: this.state.number, token: localStorage.getItem("token") }).then((result) => {
      console.log(result.data)
    })
  }


  signIn() {
    axios.post("/signInData", { username: this.state.username, password: this.state.password }).then((result) => {
      console.log(result.data.message)
      localStorage.setItem('token', result.data.myToken);
      this.setState({
        number: result.data.number,
        modal: !this.state.modal,
        password: "",
        userWelcome: <h3 id = "welcome">Welcome, {this.state.username}</h3>,
        tncSubscribe:result.data.tncSubscribe
      })
    })
  }

  stopSms() {
    axios.post("/stopText", { number: this.state.number, token: localStorage.getItem("token") }).then((result) => {
      console.log(result.data);
    })
  }

  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }

  onUserChange = (e) => {
    this.setState({
      username: (e.target.value)
    })
  }

  onPasswordChange = (e) => {
    this.setState({
      password: (e.target.value)
    })
  }

  render() {
    return (
      <div className="App" >
      <Navbar2 sendSms={this.sendSms} signIn={this.signIn} onPasswordChange={this.onPasswordChange}
           onUserChange={this.onUserChange} username={this.state.username} password={this.state.password} toggle={this.toggle} 
           modal={this.state.modal} stopSms={this.stopSms} tncSubscribe={this.state.tncSubscribe}/>
        {this.state.userWelcome}
        <div id="page-header">
          {/* <Signinfield id="Signinfield" sendSms={this.sendSms} signIn={this.signIn} onPasswordChange={this.onPasswordChange}
           onUserChange={this.onUserChange} username={this.state.username} password={this.state.password} toggle={this.toggle} 
           modal={this.state.modal} stopSms={this.stopSms} /> */}
          {/* <div id="sub-page-header">
            <img src={require("./logo.png")} className="App-logo" alt="logo" />
          </div> */}
        </div>
        <Tabs sendTnCText={this.sendTnCText} sendHeebsText={this.sendHeebsText} sendDavesText={this.sendDavesText}/>
      </div>
    );
  }
}
