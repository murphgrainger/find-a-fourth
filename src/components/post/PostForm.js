import React from 'react';

import './post.css'
import 'rc-slider/assets/index.css';


import { Grid, Row, Col, Form, FieldGroup, Checkbox, Radio, FormControl, Button, FormGroup, ControlLabel } from 'react-bootstrap';

import Tooltip from 'rc-tooltip';
import Slider from 'rc-slider';
import moment from 'moment'

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

const wrapperStyle = { width: 400, margin: 50 };


class PostForm extends React.Component {

  constructor(props) {
  super(props);
  this.state = {};
}
    render() {
        return (
          <div className="container">
            <Grid>
              <Row className="form-holder">
            <form>
              <Row>
              <Col xs={10} sm={10} md={5}>
                <h3>Tee Time Information</h3>
              <FormGroup>
              <FormControl
                type="text"
                value={this.state.value}
                placeholder="Course Name"
                onChange={this.handleChange}
                />
              </FormGroup>
              <FormGroup>
              <FormControl
                type="text"
                value={this.state.value}
                placeholder="Course Address"
                onChange={this.handleChange}
                />
              </FormGroup>
              <div className="inline-formgroup">
            <FormGroup>
              <FormControl
                type="text"
                value={this.state.value}
                placeholder="Tee Time"
                onChange={this.handleChange}
                />
              </FormGroup>
              <FormGroup>
                <FormControl
                  type="text"
                  value={this.state.value}
                  placeholder="Date"
                  onChange={this.handleChange}
                  />
                </FormGroup>
              </div>
              <ControlLabel>Group Size</ControlLabel>
            <FormGroup>
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
          </Col>
          <Col xs={10} sm={10} md={5}>
            <h3>Group Preferences</h3>
                <div className="inline-formgroup">
                  <FormGroup>
                    <FormControl
                      type="text"
                      value={this.state.value}
                      placeholder="Min Age"
                      onChange={this.handleChange}
                      />
                    </FormGroup>
                    <FormGroup>
                      <FormControl
                        type="text"
                        value={this.state.value}
                        placeholder="Max Age"
                        onChange={this.handleChange}
                        />
                      </FormGroup>
                    </div>
                      <div className="inline-formgroup">
                    <FormGroup>
                      <FormControl
                        type="text"
                        value={this.state.value}
                        placeholder="Min Handicap"
                        onChange={this.handleChange}
                        />
                      </FormGroup>
                      <FormGroup>
                        <FormControl
                          type="text"
                          value={this.state.value}
                          placeholder="Max Handicap"
                          onChange={this.handleChange}
                          />
                        </FormGroup>
                      </div>
                    <ControlLabel>Gender Preference</ControlLabel>
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
                <FormGroup>
                  <div style={wrapperStyle}>
                    <p>Start Time</p>
                    <Range min={6} max={18.5} defaultValue={[9, 15]} tipFormatter={value => `${value}`} />
                  </div>
                </FormGroup>
              </Row>
              </form>
            </Row>
          </Grid>
          </div>
        );
    }
}

export default PostForm;
