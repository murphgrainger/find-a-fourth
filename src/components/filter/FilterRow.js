import React from 'react';
import { Redirect } from 'react-router-dom';


import './filter.css'
import 'rc-slider/assets/index.css';

import { Row, Col, Label, Card, ListGroup } from 'reactstrap';

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

    render() {
       const { redirect } = this.state;
       if (redirect) {
       return <Redirect to='/post'/>;
     }
        return (
          <div>
              <Row className="filter-row">
                <Col xs="12" md="4">
                <div className="slider">
                  <Label>Handicap</Label>
                  <Range min={0} max={40} defaultValue={[this.state.handicapRange[0], this.state.handicapRange[1]]} marks={handicapMarks} onAfterChange={this.handicapValues}	tipFormatter={value => `${value}`} />
                </div>
                </Col>
                <Col xs="12" md="4">
                <div className="slider">
                  <Label>Age</Label>
                  <Range min={17} max={75} defaultValue={[this.state.ageRange[0], this.state.ageRange[1]]} marks={ageMarks} onAfterChange={this.ageValues}	tipFormatter={value => `${value}`} />
                </div>
              </Col>
              <Col xs="12" md="4">
              <div className="slider">
                <Label>Group Size</Label>
                <Range min={1} max={3} defaultValue={[this.state.groupSize[0], this.state.groupSize[1]]} marks={sizeMarks} onAfterChange={this.groupSizeVals}	tipFormatter={value => `${value}`} />
              </div>
            </Col>
              </Row>
          </div>
        );
    }

    postFunction(state) {
      let url = `${LOCAL_URL}/posts`;
      fetch(url, {
        method: 'POST',
        mode: 'cors',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
        body: JSON.stringify(state)
      }).then(res => {
        return res.json()
      }).then(data => {
        this.setState({
          redirect: true
        })
        console.log(data);
      }).catch(err => {
        console.log(err)
      })
    }
}

export default FilterRow;
