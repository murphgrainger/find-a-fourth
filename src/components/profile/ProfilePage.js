import React from 'react';
import {Link} from 'react-router';

import { Grid, Row, Col, Form, FieldGroup, Checkbox, Radio, FormControl, Button, FormGroup, ControlLabel } from 'reactstrap';

import Tooltip from 'rc-tooltip';
import Slider from 'rc-slider';
import moment from 'moment';

const wrapperStyle = { width: 300, 'margin-top': 50, 'margin-bottom': 50 };


const timeMarks = {
  6: <strong>6am</strong>,
  8: '8am',
  10: '10am',
  12: '12pm',
  14: '2pm',
  16: <strong>4pm</strong>,
};


const distanceMarks = {
  5: <strong>5mi</strong>,
  20: '20mi',
  35: '35mi',
  55: '55mi',
  75: <strong>75mi</strong>,
};

class ProfilePage extends React.Component {
    render() {
        return (
          <div className = "container">
            <h1>My Profile</h1>
            <p>Murph Grainger</p>
            <p>Handicap: 12</p>
            <p>Female</p>
            <p>24</p>

              <FormGroup>
                <div style={wrapperStyle}>
                  <p>Travel Distance</p>
                  <Range min={5} max={75} defaultValue={[5, 20]} marks={distanceMarks} onAfterChange={this.distanceValues}	tipFormatter={value => `${value}`} />
                  </div>
                </FormGroup>
                <FormGroup>
                  <div style={wrapperStyle}>
                    <p>Start Time</p>
                    <Range min={6} max={16} defaultValue={[9, 16]} marks={timeMarks} onAfterChange={this.timeValues}	tipFormatter={value => `${this.timeReformat(value)}`} />
                    </div>
                  </FormGroup>
          </div>
        );
    }
}

export default ProfilePage;
