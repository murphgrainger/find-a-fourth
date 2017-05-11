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
              <h2>Select Group Preferences</h2>
              <p className="label">Date</p>
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
                    <p className="label">Current Group Size</p>
                          <FormGroup id="radio-group">
                            <Radio name="one" inline>
                              1
                            </Radio>
                            {' '}
                            <Radio name="two" inline>
                              2
                            </Radio>
                            {' '}
                            <Radio name="three" inline>
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
