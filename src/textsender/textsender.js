import React, { Component } from 'react';
import axios from "axios";
// var twilio = require('twilio');


export default class Textsender extends Component {
    constructor(){
        super();
        this.sendSms = this.sendSms.bind(this);
        this.state = {
            myNumber:"+16309622093"
        }

    }

sendSms(){
    axios.post("/text", {number:this.state.myNumber}).then((result) =>{
    })
}

    render(){
        return (
            <div>
                <button onClick={this.sendSms}>Send SMS</button>
            </div>
        )
    }
}