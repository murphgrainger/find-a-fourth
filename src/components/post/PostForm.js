import React from 'react';
import { Redirect } from 'react-router-dom';


import './post.css'
import 'rc-slider/assets/index.css';
import 'react-datepicker/dist/react-datepicker.css';


import { Row, Col, Form, Checkbox, Input, FormControl, Button, FormGroup, ControlLabel, Label, Jumbotron, Container, Card, CardTitle, CardText } from 'reactstrap';

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

  constructor (props) {
    super(props)
    this.state = {
      date: moment()
    };
    this.handleDateChange = this.handleDateChange.bind(this);
  }


  onFormSubmit(e) {
    e.preventDefault()
      this.props.onFormSubmit(this.state);
     }

  setInternalState(prop, val){
    this.setState({
      [prop]: val
    })
  }

  handleDateChange(val) {
      this.setState({
        date: val
      });
    }

    render() {
        return (
          <div className="form-holder">
            <Jumbotron fluid className="search-jumbotron">
              <Container fluid>
                <h1 className="display-3">Create a Group</h1>
                <p className="lead">Select preferences for players to join. Only players who match all preferences will be able to see your post.</p>
              </Container>
            </Jumbotron>
            <form onSubmit={(e) => this.onFormSubmit(e)}>
              <Row className="top-row">
                <Col xs="12" sm="12" md="4" lg="4">
                  <Card block inverse className="date-card preference-card">
                    <CardTitle>Date of Round</CardTitle>
                      <FormGroup><DatePicker
                      selected={this.state.date}
                      onChange={this.handleDateChange}
                      className="date-picker"
                      /></FormGroup>
                  </Card>
                </Col>
                <Col xs="12" sm="12" md="4" lg="4">
                  <Card block inverse className="preference-card">
                    <CardTitle>Current Group Size</CardTitle>
                      <FormGroup>
                     <Input type="select" name="select" id="group-size" onChange={(e) => this.setInternalState('sizeGroup', e.target.value)}>
                       <option value="1" defaultValue>1</option>
                       <option value="2">2</option>
                       <option value="3">3</option>
                     </Input>
                   </FormGroup>
                  </Card>
                </Col>
                <Col xs="12" sm="12" md="4" lg="4">
                  <Card block inverse className="preference-card">
                    <CardTitle>Gender Preference</CardTitle>
                      <FormGroup>
                     <Input type="select" name="select" id="gender-group" onChange={(e) => this.setInternalState('gender', e.target.value)}>
                       <option value="any" defaultValue>Any</option>
                       <option value="male">Male</option>
                       <option value="female">Female</option>
                     </Input>
                   </FormGroup>
                    </Card>
                  </Col>
              </Row>
              <Row className="range-row">
              <FormGroup>
                <div className="slider">
                  <Label>Handicap</Label>
                  <Range min={0} max={40} defaultValue={[this.props.initialState.handicapRange[0], this.props.initialState.handicapRange[1]]} marks={handicapMarks} onAfterChange={(e) => this.setInternalState('handicapRange', e)}	tipFormatter={value => `${value}`} />
                </div>
              </FormGroup>
              <FormGroup>
                <div className="slider">
                  <Label>Age</Label>
                  <Range min={17} max={75} defaultValue={[this.props.initialState.ageRange[0], this.props.initialState.ageRange[1]]} marks={ageMarks} onAfterChange={(e) => this.setInternalState('ageRange', e)}	tipFormatter={value => `${value}`} />
                </div>
              </FormGroup>
              </Row>
              <Row className="button-row">
              <Button type="submit" className="color-hit-orange">
                Next
              </Button>
              </Row>
              </form>
          </div>
        );
    }
}

export default PostForm;
