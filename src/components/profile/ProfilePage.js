import React, { Component } from 'react';
import {Link} from 'react-router';

import { Row, Col, Form, FormControl, Button, ButtonGroup, FormGroup, ControlLabel, Container } from 'reactstrap';

import Tooltip from 'rc-tooltip';
import Slider from 'rc-slider';
import moment from 'moment';

import './profile.css'

import { API_URL } from './../../constants';


class ProfilePage extends Component {
    componentWillMount() {
    this.setState({ profile: {} });
    const { userProfile, getProfile } = this.props.auth;
    console.log(this.props.auth);
    if (!userProfile) {
      getProfile((err, profile) => {
        this.setState({ profile });
        this.getPreferences(this.state.profile.sub, this.state.profile.name)
      });
    } else {
      this.setState({ profile: userProfile });
    }
  }

  getPreferences(id, name) {
    console.log(id, name);
    let body = {
      id: id,
      name: name
    }
      const { authFetch } = this.props.auth;
      if (!this.props.auth.isAuthenticated()) {
        this.props.auth.login()
      } else {
      authFetch(`${API_URL}/users`, { method: 'POST', mode: 'cors' , body: JSON.stringify(body)})
      .then(res => {
        return res;
      }).then(data => {
        console.log(data);
      }).catch(err => {
        console.log(err)
      })
  }
    //take id of user, and get associated preferences

  }

    render() {

      const { profile } = this.state;
        return (
          <div>
            <div className="search-jumbotron">
              <Container fluid>
                <h3>My Account</h3>
              </Container>
            </div>
            <div className="search-holder">
              <Col xs="12" sm="12" md="3" className="sidebar">
                <ButtonGroup vertical>
                  <Button className="nav-options">Account Info</Button>
                  <Button className="nav-options">Location</Button>
                  <Button className="nav-options">Posts</Button>
                  <Button className="nav-options">Join Requests</Button>
                  <Button className="nav-options" onClick={this.props.auth.logout}>Log Out</Button>
                </ButtonGroup>
              </Col>
              <Col xs="12" sm="12" md="9" className="profile-info">
                <h1>{profile.name}</h1>
                <h6>{profile.sub}</h6>
                    <pre>{JSON.stringify(profile,null, 2)}</pre>
              </Col>
            </div>
          </div>
        );
    }
}



export default ProfilePage;
