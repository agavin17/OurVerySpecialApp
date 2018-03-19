import React from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import { Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import "./business.css";
import axios from "axios";


export default class Biz extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            modal: false,
            email: "",
            password: "",
            username: "",
        };

        this.toggle = this.toggle.bind(this);
        this.onEmailChange = this.onEmailChange.bind(this);
        this.onPasswordChange = this.onPasswordChange.bind(this);
        // this.onUserChange = this.onUserChange.bind(this);
        this.signUp = this.signUp.bind(this);


    }

    toggle() {
        this.setState({
            modal: !this.state.modal
        });
    }

    signUp() {
        debugger
        console.log(this.state.username)
        axios.post("/signUpBiz", { username: this.state.username, password: this.state.password, email: this.state.email }).then((result) => {
            if (result.data === "Sign Up Successful") {
                this.setState({
                    email: "",
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
        console.log(this.state.password)
        this.setState({
            password: (e.target.value)
        })
    }

    onEmailChange = (e) => {
        this.setState({
            email: (e.target.value)
        })
    }

    render() {
        return (
            <div>
               <Button id="businessSignUp" onClick={this.toggle}>For Business</Button>
                <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
                    <ModalHeader toggle={this.toggle}>Business Sign Up Form</ModalHeader>
                    <ModalBody>
                        <Form>
                            <FormGroup>
                                <Label for="exampleEmail">Email</Label>
                                <Input type="email" name="email" value={this.state.email} onChange={this.onEmailChange} id="exampleEmail" placeholder="Must be a valid email" />
                            </FormGroup>
                            <FormGroup>
                                <Label for="exampleUser">Username</Label>
                                <Input type="text" name="username" value={this.state.username} onChange={this.onUserChange} id="exampleEmail" placeholder="Choose a Username" />
                            </FormGroup>

                            {/* <FormGroup>
                                <Label for="exampleUrl">Facebook URL</Label>
                                <Input type="text" name="email" id="exampleEmail" placeholder="Paste your business Facebook URL here" />
                            </FormGroup> */}

                            <FormGroup>
                                <Label for="examplePassword">Password</Label>
                                <Input type="password" name="password" value={this.state.password} onChange={this.onPasswordChange} id="examplePassword" placeholder="Password" />
                            </FormGroup>
                            {/* <FormGroup>
                                <Label for="exampleSelect">Select Approximate Time You Will Post Lunch Speicals</Label>
                                <Input type="select" name="select" id="exampleSelect">
                                    <option>8:00AM</option>
                                    <option>8:30AM</option>
                                    <option>9:00AM</option>
                                    <option>9:30AM</option>
                                    <option>10:00AM</option>
                                    <option>10:30AM</option>
                                    <option>11:00AM</option>
                                    <option>11:30AM</option>
                                    <option>12:00PM</option>
                                    <option>12:30PM</option>

                                </Input>
                            </FormGroup>
                            <FormGroup>
                                <Label for="exampleText">Any additional comments</Label>
                                <Input type="textarea" name="text" id="exampleText" />
                            </FormGroup>
                            <FormGroup>
                                <Label for="exampleFile">Upload Logo</Label>
                                <Input type="file" name="file" id="exampleFile" />
                                <FormText color="muted">
                                    This is some placeholder block-level help text for the above input.
                                    It's a bit lighter and easily wraps to a new line.
          </FormText>
                            </FormGroup> */}
                            <Button onClick={this.signUp}>Submit</Button>
                        </Form>
                    </ModalBody>
                    <ModalFooter>
                        {/* <Button color="primary" onClick={this.toggle}>Do Something</Button>{' '} */}
                        <Button color="secondary" onClick={this.toggle}>Cancel</Button>
                    </ModalFooter>
                </Modal>
            </div>
        );
    }
}

