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

class PostForm extends React.Component {

  constructor(props) {
  super(props);
  this.state = {
    startDate: moment(),
    ageRange: [25, 45],
    handicapRange: [10, 20],
    genderGroup: ['male', 'female', 'any'],
    sizeGroup: [1, 2, 3]
};
  this.timeReformat = this.timeReformat.bind(this);
  this.timeValues = this.timeValues.bind(this)
  this.handicapValues = this.handicapValues.bind(this)
  this.ageValues = this.ageValues.bind(this)
  this.handleChange = this.handleChange.bind(this)
  this.formSubmit = this.formSubmit.bind(this)
}

timeReformat(int) {
  return moment(int, 'HH').format('ha')
}

timeValues(arrVals) {
  console.log(arrVals);
}

handicapValues(arrVals) {
  this.setState({
    handicapRange: arrVals
  });
}

ageValues(arrVals) {
  this.setState({
    ageRange: arrVals
  });
}

handleChange(date) {
  this.setState({
    startDate: date
  });
}

formSubmit(e) {
  e.preventDefault()
    this.setState({
      startDate: this.state.startDate,
      ageRange: this.state.ageRange,
      handicapRange: this.handicapRange,
      genderGroup: this.genderGroup,
      sizeGroup: this.sizeGroup
    });
    console.log(this.state);
}

    render() {
        return (
          <div className="container">
            <Grid>
            <Row className="form-holder">
            <form onSubmit={this.formSubmit}>
              <h2>Select Group Preferences</h2>
              <p className="label">Available Date</p>
              <FormGroup id="date-container">
                <DatePicker
                  selected={this.state.startDate}
                  onChange={this.handleChange}
                  className="date-picker"
                  />
              </FormGroup>
              <p className="label">Handicap Range</p>
              <FormGroup>
                <div className="slider">
                  <Range min={0} max={40} defaultValue={[10, 20]} marks={handicapMarks} onAfterChange={this.handicapValues}	tipFormatter={value => `${value}`} />
                </div>
              </FormGroup>
                <p className="label">Age Range</p>
              <FormGroup>
                <div className="slider">
                  <Range min={17} max={75} defaultValue={[25, 45]} marks={ageMarks} onAfterChange={this.ageValues}	tipFormatter={value => `${value}`} />
                </div>
              </FormGroup>
              <p className="label">Gender Preference</p>
              <FormGroup id="radio-group">
                <Radio name="genderGroup" value="any" inline>
                  Any
                </Radio>
                <Radio name="genderGroup" value="male" inline>
                  Male
                </Radio>
                <Radio name="genderGroup" value="female" inline>
                  Female
                </Radio>
              </FormGroup>
              <p className="label">Current Group Size</p>
              <FormGroup id="radio-group">
                <Radio name="sizeGroup" inline>
                  1
                </Radio>
                <Radio name="sizeGroup" inline>
                  2
                </Radio>
                <Radio name="sizeGroup" inline>
                  3
                </Radio>
              </FormGroup>
              <Button type="submit" bsStyle="success">
                Next
              </Button>
              </form>
            </Row>
          </Grid>
          </div>
        );
    }
}

export default PostForm;
