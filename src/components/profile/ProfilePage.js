import React from 'react';
import {Link} from 'react-router';

import { Grid, Row, Col, Form, FieldGroup, Checkbox, Radio, FormControl, Button, FormGroup, ControlLabel, Container } from 'reactstrap';

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
                <ul>
                  <li>Profile</li>
                  <li>Location</li>
                  <li>Preferences</li>
                </ul>
              </Col>
              <Col xs="12" sm="12" md="9" className="profile-info">

              </Col>
            </div>
          </div>
        );
    }
}

export default ProfilePage;
