import React from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem } from 'reactstrap';
import Signin from "../signin/signin.js";
import Signup from "../signup/signup.js";
import Profile from "../profile/profile.js";

export default class Navbar2 extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.logOut = this.logOut.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  logOut() {
    localStorage.clear();
    window.location.reload();
}

  render() {
    return (
      <div>
        <Navbar color="faded" light expand="md">
          {/* <NavbarBrand href="/"></NavbarBrand> */}
          {/* <div id="logo"> */}
          {/* </div> */}
          <Profile tncSubscribe={this.props.tncSubscribe}/>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="/components/">Components</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="https://github.com/reactstrap/reactstrap">Github</NavLink>
              </NavItem>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  Sign in/up
                </DropdownToggle>
                <DropdownMenu >
                  <DropdownItem>
                    <Signin sendSms={this.props.sendSms} signIn={this.props.signIn} onPasswordChange={this.props.onPasswordChange}
                        onUserChange={this.props.onUserChange} username={this.props.username} password={this.props.password}
                        toggle={this.props.toggle} modal={this.props.modal} stopSms={this.props.stopSms}/>
                  </DropdownItem>
                  <DropdownItem>
                    <Signup/>
                  </DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem>
                    <button onClick={this.logOut}>Log Out</button>
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}