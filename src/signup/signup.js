/* eslint react/no-multi-comp: 0, react/prop-types: 0 */

import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import axios from "axios";
import "./signup.css";

export default class Signup extends React.Component {
    constructor() {
        super();
        this.state = {
            modal: false,
            number: "",
            password: "",
            username: ""
        }
        this.toggle = this.toggle.bind(this);
        this.signUp = this.signUp.bind(this);
        this.onNumberChange = this.onNumberChange.bind(this);
        this.onPasswordChange = this.onPasswordChange.bind(this);
        this.onUserChange = this.onUserChange.bind(this);
    }

    toggle() {
        this.setState({
            modal: !this.state.modal
        });
    }

    signUp() {
        console.log(this.state.username)
        axios.post("/signUpData", { username: this.state.username, password: this.state.password, number: this.state.number }).then((result) => {
            if (result.data === "Sign Up Successful") {
                this.setState({
                    number: "",
                    username: "",
                    password: "",
                    modal: !this.state.modal,
                })
            } else {
                alert(`${result.data}`)
            }
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

    onNumberChange = (e) => {
        this.setState({
            number: (e.target.value)
        })
    }

    render() {
        return (
            <div>
                <Button id="signup-button" color="danger" onClick={this.toggle}>Sign Up</Button>
                <Modal id="signUpModal" isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
                    <ModalHeader className="modal-parts" toggle={this.toggle}>Sign up below</ModalHeader>
                    <ModalBody className="modal-parts">
                        <div><p>Username:</p>
                            <input type="text" name="username" placeholder="username" value={this.state.username} onChange={this.onUserChange} />
                            <br/><br/>
                            <p>Password:</p>
                            <input type="password" name="password" placeholder="password" value={this.state.password} onChange={this.onPasswordChange} />
                            <br/><br/>
                            <p>Phone Number:</p>
                            <input type="text" name="number" placeholder="phone number" value={this.state.number} onChange={this.onNumberChange} />
                        </div>
                    </ModalBody>
                    <ModalFooter className="modal-parts">
                        <Button color="dark" onClick={this.signUp}>Sign Up</Button>{' '}
                    </ModalFooter>
                </Modal>
            </div>
        );
    }
}
