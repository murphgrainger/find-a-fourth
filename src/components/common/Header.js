import React from 'react';
import PropTypes from 'prop-types';
import LinkContainer from 'react-router-bootstrap/lib/LinkContainer';

import Navbar from 'react-bootstrap/lib/Navbar';
import Nav from 'react-bootstrap/lib/Nav';
import MenuItem from 'react-bootstrap/lib/MenuItem';
import NavItem from 'react-bootstrap/lib/NavItem';
import NavDropdown from 'react-bootstrap/lib/NavDropdown';

const Header = () => {
  return (
    <div>
        <Navbar>
       <Navbar.Header>
         <Navbar.Brand>
           <a href="/">Find a Fourth</a>
         </Navbar.Brand>
       </Navbar.Header>
       <Nav>
         <LinkContainer to="/about">
         <NavItem eventKey={1} href="/about">About</NavItem>
         </LinkContainer>
         <LinkContainer to="/profile">
         <NavItem eventKey={2} href="/profile">Profile</NavItem>
         </LinkContainer>
           <LinkContainer to="/courses">
        <NavItem eventKey={3} href="/courses">Find Courses</NavItem>
        </LinkContainer>
       </Nav>
     </Navbar>
</div>
  );
}

export default Header;
