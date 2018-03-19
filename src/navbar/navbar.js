import React from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  // NavItem,
  // NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from 'reactstrap';
import Signin from "../signin/signin.js";
import Biz from "../business/business.js";
import Signup from "../signup/signup.js";
import Profile from "../profile/profile.js";
import "./navbar.css";

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
        <Navbar id="navbar-main" color="faded" light expand="md" className="w3-animate-left">
          <Profile tncSubscribe={this.props.tncSubscribe} heebsSubscribe={this.props.heebsSubscribe}
            davesSubscribe={this.props.davesSubscribe} stopSms={this.props.stopSms} userProfile={this.props.userProfile} />
          <NavbarToggler onClick={this.toggle} number={this.props.number} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav id="navbar-buttons" className="ml-auto" navbar>
              <div>
                {/* <NavItem>
                <NavLink href="/components/">Components</NavLink>
              </NavItem> */}
                {/* <NavItem>
                <NavLink href="https://github.com/reactstrap/reactstrap">Github</NavLink>
              </NavItem> */}
                <UncontrolledDropdown id="navbar-dropdown" nav inNavbar>
                  <DropdownToggle nav caret>
                    Sign in/up
                </DropdownToggle>
                  <DropdownMenu id="dropdown-menu">
                    <DropdownItem className="dropdown-item">
                      <Signin sendSms={this.props.sendSms} signIn={this.props.signIn} onPasswordChange={this.props.onPasswordChange}
                        onUserChange={this.props.onUserChange} username={this.props.username} password={this.props.password}
                        toggle={this.props.toggle} modal={this.props.modal} stopSms={this.props.stopSms} />
                    </DropdownItem>
                    <DropdownItem>
                      <Signup />
                    </DropdownItem>
                    <DropdownItem>
                      <Biz />
                    </DropdownItem>
                    <DropdownItem divider />
                    <DropdownItem>
                      <button onClick={this.logOut}>Log Out</button>
                    </DropdownItem>
                  </DropdownMenu>
                </UncontrolledDropdown>
              </div>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}
