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
    date: moment(),
    ageRange: [25, 45],
    handicapRange: [10, 20],
    gender: 'any',
    sizeGroup: 1,
    redirect: false
};
  this.timeReformat = this.timeReformat.bind(this);
  this.handicapValues = this.handicapValues.bind(this)
  this.ageValues = this.ageValues.bind(this)
  this.handleChange = this.handleChange.bind(this)
  this.formSubmit = this.formSubmit.bind(this)
  this.genderVal = this.genderVal.bind(this)
  this.sizeGroupVal = this.sizeGroupVal.bind(this)
}

timeReformat(int) {
  return moment(int, 'HH').format('ha')
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
    date: date
  });
}

genderVal(e) {
  this.setState({
    gender: e.target.value
  });
}

sizeGroupVal(e) {
  this.setState({
    sizeGroup: e.target.value
  });
}

formSubmit(e) {
  console.log(this.state);
  e.preventDefault()
    this.setState({
      date: this.state.date,
      ageRange: this.state.ageRange,
      handicapRange: this.handicapRange,
      gender: this.gender,
      sizeGroup: this.sizeGroup,
    });
    this.postFunction(this.state)
}

    render() {
       const { redirect } = this.state;
       if (redirect) {
       return <Redirect to='/search'/>;
     } 
        return (
          <div className="form-holder">
            <Jumbotron fluid className="search-jumbotron">
              <Container fluid>
                <h1 className="display-3">Create a Group</h1>
                <p className="lead">Select preferences for players to join. Only players who match all preferences will be able to see your post.</p>
              </Container>
            </Jumbotron>
            <form onSubmit={this.formSubmit}>
              <Row className="top-row">
                <Col xs="12" sm="12" md="4" lg="4">
                  <Card block inverse className="date-card preference-card">
                    <CardTitle>Date of Round</CardTitle>
                      <FormGroup><DatePicker
                      selected={this.state.date}
                      onChange={this.handleChange}
                      className="date-picker"
                      /></FormGroup>
                  </Card>
                </Col>
                <Col xs="12" sm="12" md="4" lg="4">
                  <Card block inverse className="preference-card">
                    <CardTitle>Current Group Size</CardTitle>
                      <FormGroup>
                     <Input type="select" name="select" id="group-size" onChange={this.sizeGroupVal}>
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
                     <Input type="select" name="select" id="gender-group" onChange={this.genderVal}>
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
                  <Range min={0} max={40} defaultValue={[10, 20]} marks={handicapMarks} onAfterChange={this.handicapValues}	tipFormatter={value => `${value}`} />
                </div>
              </FormGroup>
              <FormGroup>
                <div className="slider">
                  <Label>Age</Label>
                  <Range min={17} max={75} defaultValue={[25, 45]} marks={ageMarks} onAfterChange={this.ageValues}	tipFormatter={value => `${value}`} />
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

export default PostForm;
