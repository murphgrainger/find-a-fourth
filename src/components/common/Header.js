import React, { Component } from 'react';
import PropTypes from 'prop-types';

import LinkContainer from 'react-router-bootstrap/lib/LinkContainer';
import {Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink, Button} from 'reactstrap';

import '../../App.css'


class Header extends Component {
  constructor() {
    super();

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  goTo(route) {
  this.props.history.replace(`/${route}`)
  }

  login() {
    this.props.auth.login();
  }

  logout() {
    this.props.auth.logout();
  }

render() {
  const { isAuthenticated } = this.props.auth;

  return (
   <div>
      <Navbar light color="faded" toggleable>
        <NavbarToggler right onClick={this.toggle} />
        <NavbarBrand href="/">Find a Fourth</NavbarBrand>
        <Collapse isOpen={this.state.isOpen} navbar>
          <Nav className="ml-auto" navbar>
              {
              !isAuthenticated() && (
                <NavItem>
                  <Button
                    bsStyle="primary"
                    className="btn-margin"
                    onClick={this.login.bind(this)}
                  >
                    Log In
                  </Button>
                </NavItem>
                )
            }
            {
              isAuthenticated() && (
                <NavItem>
                  <Button
                    bsStyle="primary"
                    className="btn-margin"
                    onClick={this.logout.bind(this)}
                  >
                    Log Out
                  </Button>
                </NavItem>
                )
            }
          </Nav>
        </Collapse>
      </Navbar>
    </div>
    );
  }
}

export default Header;
