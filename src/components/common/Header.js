import React, { Component } from 'react';
import PropTypes from 'prop-types';

import LinkContainer from 'react-router-bootstrap/lib/LinkContainer';
import {Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink} from 'reactstrap';

import '../../App.css'


class Header extends Component {
  constructor(props) {
    super(props);

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

render() {
  return (
   <div>
      <Navbar light color="faded" toggleable>
        <NavbarToggler right onClick={this.toggle} />
        <NavbarBrand href="/">Find a Fourth</NavbarBrand>
        <Collapse isOpen={this.state.isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <NavLink href="/search/">Search</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/post/">Post</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/profile/">Profile</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
    );
  }
}

export default Header;
