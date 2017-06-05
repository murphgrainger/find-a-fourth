import React from 'react';

import './post.css'
import 'rc-slider/assets/index.css';

import moment from 'moment'
import Icon from 'react-fontawesome';


import { Row, Col, Form, Checkbox, Input, FormControl, Button, FormGroup, ControlLabel, Label, Jumbotron, Container, Card, CardTitle, CardText, CardHeader, ListGroup, ListGroupItem, CardBlock, CardFooter } from 'reactstrap';


class PreviewPost extends React.Component {
    render() {
        return (
          <div className="form-holder">
            <Jumbotron fluid className="search-jumbotron">
              <Container fluid>
                <h1 className="display-3">Preview Your Post</h1>
                <p className="lead">Verify preferences, go back to edit or submit to go live!</p>
              </Container>
            </Jumbotron>

            <Card className="course-card">
              <CardHeader>  <Icon name='calendar'/> &nbsp; {this.props.initialState.date.utc().format('ddd, MMM Do')}</CardHeader>
              <CardBlock className="card-row">
              <Col xs="12" md="4" className="location-col">
                <p><Icon name='map-marker'/> &nbsp; {this.props.initialState.address}</p>
              </Col>
              <Col xs="12" md="3" className="centered-col">
                <small>Age Range</small>
                <p>{this.props.initialState.ageRange[0]} - {this.props.initialState.ageRange[1]}</p>
              </Col>
              <Col xs="12" md="3" className="centered-col">
                <small>Handicap Range</small>
                <p>{this.props.initialState.handicapRange[0]} - {this.props.initialState.handicapRange[1]}</p>
              </Col>
              <Col xs="12" md="2" className="centered-col">
                <small>Group Count</small>
                <p>{this.props.initialState.sizeGroup}</p>
              </Col>
              </CardBlock>
              <CardFooter className="footer-buttons">
                <Button className="accent-color" onClick={this.props.editForm}>Edit</Button>
                <Button className="color-hit-orange" onClick={this.props.submitFinalForm}>Submit</Button>
                </CardFooter>
            </Card>
          </div>
        );
    }
}

export default PreviewPost;
