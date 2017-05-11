import React from 'react';

import './post.css'
import 'rc-slider/assets/index.css';
import 'react-datepicker/dist/react-datepicker.css';


import { Grid, Row, Col, Form, FieldGroup, Checkbox, Radio, FormControl, Button, FormGroup, ControlLabel } from 'react-bootstrap';

import Tooltip from 'rc-tooltip';
import Slider from 'rc-slider';
import moment from 'moment'

import { Calendar, DateRange } from 'react-date-range';
import DatePicker from 'react-datepicker';


const createSliderWithTooltip = Slider.createSliderWithTooltip;
const Range = createSliderWithTooltip(Slider.Range);
const Handle = Slider.Handle;

const handle = (props) => {
  const { value, dragging, index, ...restProps } = props;
  return (
    <Tooltip
      prefixCls="rc-slider-tooltip"
      overlay={value}
      visible={dragging}
      placement="top"
      key={index}
    >
      <Handle {...restProps} />
    </Tooltip>
  );
};

const wrapperStyle = { width: 300, 'margin-top': 50, 'margin-bottom': 50 };

const timeMarks = {
  6: <strong>6am</strong>,
  8: '8am',
  10: '10am',
  12: '12pm',
  14: '2pm',
  16: <strong>4pm</strong>,
};

const handicapMarks = {
  0: <strong>0</strong>,
  10: '10',
  20: '20',
  30: '30',
  40: <strong>40</strong>,
};

const ageMarks = {
  17: <strong>17</strong>,
  25: '25',
  35: '35',
  45: '45',
  55: '55',
  65: '65',
  75: <strong>75</strong>,
};

const distanceMarks = {
  5: <strong>5mi</strong>,
  20: '20mi',
  35: '35mi',
  55: '55mi',
  75: <strong>75mi</strong>,
};

class PostForm extends React.Component {

  constructor(props) {
  super(props);
  this.state = {
    startDate: moment()
};
  this.timeReformat = this.timeReformat.bind(this);
  this.timeValues = this.timeValues.bind(this)
  this.handicapValues = this.handicapValues.bind(this)
  this.ageValues = this.ageValues.bind(this)
  this.distanceValues = this.distanceValues.bind(this)
  this.handleChange = this.handleChange.bind(this)


}

timeReformat(int) {
  return moment(int, 'HH').format('ha')
}

timeValues(arrVals) {
  console.log(arrVals);
}

handicapValues(arrVals) {
  console.log(arrVals);
}

ageValues(arrVals) {
  console.log(arrVals);
}

distanceValues(arrVals) {
  console.log(arrVals);
}

handleChange(date) {
  this.setState({
    startDate: date
  });
}

    render() {
        return (
          <div className="container">
            <Grid>
              <Row className="form-holder">
            <form>
              <Row>
              <Col xs={10} sm={10} md={5}>
              <FormGroup>
                <p>Date</p>
              <DatePicker
                    selected={this.state.startDate}
                    onChange={this.handleChange}
                    />
            </FormGroup>
            <FormGroup>
              <FormControl type="integer" placeholder="Zip Code" />
          </FormGroup>
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
          </Col>
          <Col xs={10} sm={10} md={5}>
            <h3>Group Preferences</h3>
                  <FormGroup>
                    <div style={wrapperStyle}>
                    <p>Handicap Range</p>
                    <Range min={0} max={40} defaultValue={[10, 20]} marks={handicapMarks} onAfterChange={this.handicapValues}	tipFormatter={value => `${value}`} />
                  </div>
                </FormGroup>
                <FormGroup>
                  <div style={wrapperStyle}>
                  <p>Age Range</p>
                  <Range min={17} max={75} defaultValue={[25, 45]} marks={ageMarks} onAfterChange={this.ageValues}	tipFormatter={value => `${value}`} />
                </div>
              </FormGroup>
                    <p>Gender Preference</p>
                    <FormGroup>
                      <Radio name="Male" inline>
                        Male
                      </Radio>
                      {' '}
                      <Radio name="Female" inline>
                        Female
                      </Radio>
                      {' '}
                      <Radio name="Either" inline>
                        Either
                      </Radio>
                    </FormGroup>
                  </Col>
                </Row>
                <Row>
                <Button type="submit" bsStyle="success">
                  Post
                </Button>

              </Row>
              </form>
            </Row>
          </Grid>
          </div>
        );
    }
}

export default PostForm;
