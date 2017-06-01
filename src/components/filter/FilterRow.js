import React from 'react';
import { Redirect } from 'react-router-dom';


import './filter.css'
import 'rc-slider/assets/index.css';

import { Row, Col, Label, Card, ListGroup, Input } from 'reactstrap';

import Tooltip from 'rc-tooltip';
import Slider from 'rc-slider';
import moment from 'moment'


const LOCAL_URL= 'http://localhost:4000'
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
  35: '35',
  55: '55',
  75: <strong>75</strong>,
};

const sizeMarks = {
  1: <strong>1</strong>,
  2: <strong>2</strong>,
  3: <strong>3</strong>,
};

const genderMarks = {
  1: <strong>Any</strong>,
  2: <strong>Male</strong>,
  3: <strong>Female</strong>,
};

class FilterRow extends React.Component {

  constructor({initialHandicap, initialAge, initialSize}) {
  super();
  this.state = {
    handicapRange: initialHandicap,
    ageRange: initialAge,
    groupSize: initialSize
};
  this.handicapValues = this.handicapValues.bind(this)
  this.ageValues = this.ageValues.bind(this)
  this.groupSizeVals = this.groupSizeVals.bind(this)
  this.genderVal = this.genderVal.bind(this)

}

handicapValues(arrVals) {
  const newState = arrVals;
  this.setState({
    handicapRange: newState
  });
  this.props.callbackHandicapParent(newState);
}

ageValues(arrVals) {
  const newState = arrVals
  this.setState({
    ageRange: newState
  });
  this.props.callbackAgeParent(newState);
}

groupSizeVals(arrVals) {
  const newState = arrVals
  this.setState({
    groupSize: newState
  });
  this.props.callbackSizeParent(newState);
}

genderVal(arrVals) {
  const newState = arrVals
  this.setState({
    genderVal: newState
  });
  this.props.callbackGenderParent(newState);
}

    render() {
       const { redirect } = this.state;
       if (redirect) {
       return <Redirect to='/post'/>;
     }
        return (
          <Col xs="12" md="3" className="filter-col">
            <h2>Filters</h2>
                <div className="filter-row">
                  <Label>Handicap</Label>
                  <Range min={0} max={40} defaultValue={[this.state.handicapRange[0], this.state.handicapRange[1]]} marks={handicapMarks} onAfterChange={this.handicapValues}	tipFormatter={value => `${value}`} />
                </div>
                <div className="filter-row">
                  <Label>Age</Label>
                  <Range min={17} max={75} defaultValue={[this.state.ageRange[0], this.state.ageRange[1]]} marks={ageMarks} onAfterChange={this.ageValues}	tipFormatter={value => `${value}`} />
                </div>
                <div className="filter-row">
                <Label>Group Size</Label>
                <Range min={1} max={3} defaultValue={[this.state.groupSize[0], this.state.groupSize[1]]} marks={sizeMarks} onAfterChange={this.groupSizeVals}	tipFormatter={value => `${value}`} />
              </div>
            <div className="filter-row">
              <Label>Gender</Label>
                <Input type="select" name="select" id="gender-group" onChange={this.genderVal} className="gender-input">
                  <option value="any" defaultValue>Any</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                </Input>
            </div>
          </Col>
        );
    }
}

export default FilterRow;
