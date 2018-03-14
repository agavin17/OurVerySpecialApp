import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import Tabs from "./tabs/tabs.js";
import axios from "axios";
import Navbar2 from "./navbar/navbar.js";

export default class App extends Component {
  constructor() {
    super()
    this.sendTnCText = this.sendTnCText.bind(this);
    this.signIn = this.signIn.bind(this);
    this.onPasswordChange = this.onPasswordChange.bind(this);
    this.onUserChange = this.onUserChange.bind(this);
    this.toggle = this.toggle.bind(this);
    this.stopSms = this.stopSms.bind(this);
    this.sendDavesText = this.sendDavesText.bind(this);
    this.sendHeebsText = this.sendHeebsText.bind(this);
    this.testSms = this.testSms.bind(this);
    this.state = {
      number: "",
      password: "",
      modal: false,
      tncSubscribe: "",
      heebsSubscribe: "",
      davesSubscribe: "",
      userProfile: ""
    }
  }

  sendTnCText() {
    axios.post("/textTnC", { username: this.state.username, number: this.state.number, token: localStorage.getItem("token") }).then((result) => {
      console.log(result.data)
      this.setState({
        tncSubscribe: result.data.tncSubscribe,
        userProfile:
          <div id="profile-box">
            <p>Username: {this.state.username}</p>
            <p>Number: {result.data.number}</p>
            <p>Your Subscriptions:<br />{result.data.tncSubscribe}<br />{result.data.heebsSubscribe}<br />{result.data.davesSubscribe}</p>
            <button id="test-sms" onClick={this.testSms}>Send Test SMS</button>
            <button onClick={this.stopSms}>Stop All Texts</button>
          </div>
      })
    })
  }

  sendHeebsText() {
    axios.post("/textHeebs", { username: this.state.username, number: this.state.number, token: localStorage.getItem("token") }).then((result) => {
      console.log(result.data)
      this.setState({
        heebsSubscribe: result.data.heebsSubscribe,
        userProfile:
          <div id="profile-box">
            <p>Username: {this.state.username}</p>
            <p>Number: {result.data.number}</p>
            <p>Your Subscriptions:<br />{result.data.tncSubscribe}<br />{result.data.heebsSubscribe}<br />{result.data.davesSubscribe}</p>
            <button id="test-sms" onClick={this.testSms}>Send Test SMS</button>
            <button onClick={this.stopSms}>Stop All Texts</button>
          </div>
      })
    })
  }

  sendDavesText() {
    axios.post("/textDaves", { username: this.state.username, number: this.state.number, token: localStorage.getItem("token") }).then((result) => {
      console.log(result.data)
      this.setState({
        davesSubscribe: result.data.davesSubscribe,
        userProfile:
          <div id="profile-box">
            <p>Username: {this.state.username}</p>
            <p>Number: {result.data.number}</p>
            <p>Your Subscriptions:<br />{result.data.tncSubscribe}<br />{result.data.heebsSubscribe}<br />{result.data.davesSubscribe}</p>
            <button id="test-sms" onClick={this.testSms}>Send Test SMS</button>
            <button onClick={this.stopSms}>Stop All Texts</button>
          </div>
      })
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
        tncSubscribe: result.data.tncSubscribe,
        heebsSubscribe: result.data.heebsSubscribe,
        davesSubscribe: result.data.davesSubscribe,
        userProfile:
          <div id="profile-box">
            <p><div className="profile-base-text">Username: </div>{this.state.username}</p>
            <p><div className="profile-base-text">Number: </div>{result.data.number}</p>
            <p><div className="profile-base-text">Your Subscriptions:</div></p><p className="profile-subs">{result.data.tncSubscribe}</p><p className="profile-subs">{result.data.heebsSubscribe}</p><p className="profile-subs">{result.data.davesSubscribe}</p>
            <button id="test-sms" className="profile-buttons" onClick={this.testSms}>Test SMS</button>
            <button id="stop-sms" className="profile-buttons" onClick={this.stopSms}>Stop All SMS</button>
          </div>
      })
      console.log(this.state.tncSubscribe)
    })
  }

  testSms() {
    axios.post("/testText", { username: this.state.username, number: this.state.number, token: localStorage.getItem("token") }).then((result) => {
      console.log(result.data)
    })
  }

  stopSms() {
    axios.post("/stopText", { username: this.state.username, number: this.state.number, token: localStorage.getItem("token") }).then((result) => {
      console.log(result.data);
      this.setState({
        tncSubscribe: result.data.tncSubscribe,
        heebsSubscribe: result.data.heebsSubscribe,
        davesSubscribe: result.data.davesSubscribe,
        userProfile:
          <div id="profile-box">
            <p>Username:<br />{this.state.username}</p>
            <p>Number:<br />{result.data.number}</p>
            <p>Your Subscriptions:<br />{result.data.tncSubscribe}<br />{result.data.heebsSubscribe}<br />{result.data.davesSubscribe}</p>
            <button id="test-sms" onClick={this.testSms}>Send Test SMS</button>
            <button onClick={this.stopSms}>Stop All Texts</button>
          </div>
      })
      if (result.data.message) {
        alert(result.data.message)
      }
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
        <Navbar2 signIn={this.signIn} onPasswordChange={this.onPasswordChange}
          onUserChange={this.onUserChange} username={this.state.username} password={this.state.password} toggle={this.toggle}
          modal={this.state.modal} stopSms={this.stopSms} tncSubscribe={this.state.tncSubscribe} heebsSubscribe={this.state.heebsSubscribe}
          davesSubscribe={this.state.davesSubscribe} userProfile={this.state.userProfile} number={this.state.number} />
        {this.state.userWelcome}
        <div id="page-header">
        </div>
        <Tabs sendTnCText={this.sendTnCText} sendHeebsText={this.sendHeebsText} sendDavesText={this.sendDavesText} />
      </div>
    );
  }
}
