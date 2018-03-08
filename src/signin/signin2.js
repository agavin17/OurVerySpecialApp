/* eslint react/no-multi-comp: 0, react/prop-types: 0 */

import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.css';

export default class Signin2 extends React.Component {
    constructor() {
        super();
        this.state = {
            modal: false,
            username: "",
            password: "",
            number: ""
        };
        this.signIn = this.signIn.bind(this);
        this.sendSms = this.sendSms.bind(this);
        this.toggle = this.toggle.bind(this);
    }

    toggle() {
        this.setState({
            modal: !this.state.modal
        });
    }

    signIn() {
        axios.post("/signInData", { username: this.state.username, password: this.state.password }).then((result) => {
            console.log(result.data.message)
            localStorage.setItem('token', result.data.myToken);
            this.setState({
                number: result.data.number,
                modal: !this.state.modal
            })
        })
    }

    // sendSms() {
    //     axios.post("/text", { number: this.state.number }).then((result) => {
    //         console.log(result.data)
    //     })
    // }

    sendSms() {
        axios.post("/text", { number: this.state.number, token: localStorage.getItem("token") }).then((result) => {
           console.log(result.data)
        })
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
            <div>
                <Button color="danger" onClick={this.toggle}>Sign In</Button>
                <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
                    <ModalHeader toggle={this.toggle}>Modal title</ModalHeader>
                    <ModalBody>
                        <div>
                            <input type="text" name="username" placeholder="username" value={this.state.username} onChange={this.onUserChange} />
                            <input type="password" name="password" placeholder="password" value={this.state.password} onChange={this.onPasswordChange} />
                            {/* <button id="signInBtn" onClick={this.signIn}>Sign In</button> */}
                        </div>
                    </ModalBody>
                    <ModalFooter>
                        <Button color="primary" onClick={this.signIn}>Sign In</Button>{' '}
                    </ModalFooter>
                </Modal>
                <br/>
                <br/>
                <button id="sendSmsBtn" onClick={this.sendSms}>Sign up for daily text alerts</button>
            </div>
        );
    }
}
