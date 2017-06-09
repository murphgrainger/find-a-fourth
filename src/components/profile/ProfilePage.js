import React from 'react';
import {Link} from 'react-router';

import { Row, Col, Form, FormControl, Button, ButtonGroup, FormGroup, ControlLabel, Container } from 'reactstrap';

import Tooltip from 'rc-tooltip';
import Slider from 'rc-slider';
import moment from 'moment';

import './profile.css'

class ProfilePage extends React.Component {

    render() {
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

              </Col>
            </div>
          </div>
        );
    }
}

export default ProfilePage;
