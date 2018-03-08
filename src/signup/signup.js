import React, { Component } from 'react';
import "./signup.css";
import axios from "axios";

export default class Signup extends Component {
    constructor(){
        super();
        this.signUp = this.signUp.bind(this);
        this.onNumberChange = this.onNumberChange.bind(this);
        this.onPasswordChange = this.onPasswordChange.bind(this);
        this.onUserChange = this.onUserChange.bind(this);
        this.state ={
            number:"",
            password:"",
            username:""
        }
    }

    signUp(){
        console.log(this.state.username)
        axios.post("/signUpData", {username:this.state.username, password:this.state.password, number:this.state.number}).then((result) =>{
            this.setState({
                number:"",
                username:"",
                password:""
            })
        })
    }

onUserChange = (e) =>{
    this.setState({
        username:(e.target.value)
    })
}

onPasswordChange = (e) =>{
    this.setState({
        password:(e.target.value)
    })
}

onNumberChange = (e) =>{
    this.setState({
        number:(e.target.value)
    })
}

    render(){
        return (
            <div>
                <input type="text" name="username" placeholder="username" value={this.state.username} onChange={this.onUserChange}/>
                <input type="password" name="password" placeholder="password" value={this.state.password} onChange={this.onPasswordChange}/>
                <input type="text" name="number" placeholder="phone number" value={this.state.number} onChange={this.onNumberChange}/>

                <button id="signUpBtn" onClick={this.signUp}>Sign Up</button>
            </div>
        )
    }
}