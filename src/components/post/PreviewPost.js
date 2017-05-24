import React from 'react';
import { Redirect } from 'react-router-dom';


import './post.css'
import 'rc-slider/assets/index.css';

import moment from 'moment'
import Icon from 'react-fontawesome';


import { Row, Col, Form, Checkbox, Input, FormControl, Button, FormGroup, ControlLabel, Label, Jumbotron, Container, Card, CardTitle, CardText, CardHeader, ListGroup, ListGroupItem, CardBlock, CardFooter } from 'reactstrap';


class PreviewPost extends React.Component {

  constructor (props) {
    super(props)
}

    render() {
        return (
          <div className="form-holder">
            <Jumbotron fluid className="search-jumbotron">
              <Container fluid>
                <h1 className="display-3">Preview Your Post</h1>
                <p className="lead">Verify preferences, go back to edit or submit to go live!</p>
              </Container>
            </Jumbotron>

            <Card inverse className="post-card">
              <CardHeader className="date" style={{ backgroundColor: '#475B5A', borderColor: '#475B5A' }}>
                <Row>
                <Col xs="10" lg="10" className="date-col">
                <Icon name='calendar'/> &nbsp; {this.props.initialState.date.utc().format('ddd, MMM Do')}
                </Col>
                <Col xs="2" lg="2" className="user-col">
                <Icon name='user'/> <small>{this.props.initialState.sizeGroup}</small>
                </Col>
                </Row>
                </CardHeader>
                <CardBlock>
                <ListGroup>
                <ListGroupItem className="preferences"> <Icon name='map-marker'/> &nbsp; {this.props.initialState.address}</ListGroupItem>
                <ListGroupItem className="preferences"> {this.props.initialState.handicapRange[0]} to {this.props.initialState.handicapRange[1]} Index</ListGroupItem>
                <ListGroupItem className="preferences"> {this.props.initialState.ageRange[0]} to {this.props.initialState.ageRange[1]} yrs</ListGroupItem>
                </ListGroup>
              </CardBlock>
              <CardFooter><Button block className="color-hit-orange" onClick={this.props.submitFinalForm}>Submit Post</Button></CardFooter>
            </Card>
          </div>
        );
    }
}

export default PreviewPost;
