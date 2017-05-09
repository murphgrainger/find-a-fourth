import React from 'react';
import PropTypes from 'prop-types';

import LinkContainer from 'react-router-bootstrap/lib/LinkContainer';
import {Navbar, Nav, MenuItem, NavItem, NavDropdown} from 'react-bootstrap/lib';

const Header = () => {
  return (
    <div>
        <Navbar inverse>
       <Navbar.Header>
         <Navbar.Brand>
           <a href="/">Find a Fourth</a>
         </Navbar.Brand>
       </Navbar.Header>
       <Nav pullRight>
        <LinkContainer to="/search">
        <NavItem eventKey={3} href="/search">Search</NavItem>
        </LinkContainer>
        <LinkContainer to="/post">
        <NavItem eventKey={4} href="/post">Post</NavItem>
        </LinkContainer>
         <LinkContainer to="/profile">
         <NavItem eventKey={2} href="/profile">Profile</NavItem>
         </LinkContainer>
       </Nav>
     </Navbar>
</div>
  );
}

export default Header;
