import React, { Component } from 'react';
import {Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink, Button} from 'reactstrap';
import './App.css';

import Home from './components/home/HomePage';


class App extends Component {
  constructor() {
    super();

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }

  componentDidMount() {
    console.log(this.props.location.pathname);
    if (this.props.location.pathname === '/') {
    }
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
    const atHome = this.props.location.pathname;

    return (
      <div>
        <Navbar light color="faded" toggleable>
          <NavbarToggler right onClick={this.toggle} />
            <NavbarBrand href="/">Find a Fourth
            </NavbarBrand>
            <Collapse isOpen={this.state.isOpen} navbar>
              <Nav className="ml-auto" navbar>
            <NavLink
              onClick={this.goTo.bind(this, 'search')}
            >
              Search
            </NavLink>
            <NavLink
              onClick={this.goTo.bind(this, 'posts')}
            >
              Post
            </NavLink>
            {
              !isAuthenticated() && (
                  <NavLink
                    onClick={this.login.bind(this)}
                  >
                    Log In
                  </NavLink>
                )
            }
            {
              isAuthenticated() && (
                  <NavLink
                    onClick={this.goTo.bind(this, 'profile')}
                  >
                    Profile
                  </NavLink>
                )
            }
          </Nav>
        </Collapse>
        </Navbar>
      </div>
    );
  }
}

export default App;
