import React, { Component } from 'react';

import JoinModal from './JoinModal';
import './card.css';

import { Card, Button, CardHeader, CardText, Row, Col, CardDeck, ListGroup, ListGroupItem, CardBlock, CardFooter, CardTitle, CardSubtitle } from 'reactstrap';
import Icon from 'react-fontawesome';


class PostCard extends Component {
  constructor(props) {
  super(props);
}

  render() {
    return (
      <Card className="course-card">
        <CardHeader>  <Icon name='calendar'/> &nbsp; {this.props.post.date}</CardHeader>
        <CardBlock className="card-row">
        <Col xs="12" md="3" className="location-col">
          <p><Icon name='map-marker'/> &nbsp; {this.props.post.address}</p>
        </Col>
        <Col xs="12" md="3" className="centered-col">
          <small>Age Range</small>
          <p>{this.props.post.age_min} - {this.props.post.age_max}</p>
        </Col>
        <Col xs="12" md="2" className="centered-col">
          <small>Handicap Range</small>
          <p>{this.props.post.handicap_min} - {this.props.post.handicap_max}</p>
        </Col>
        <Col xs="12" md="2" className="centered-col">
          <small>Group Count</small>
          <p>{this.props.post.group_count}</p>
        </Col>
        <Col xs="12" md="2" className="centered-col">
          <JoinModal post={this.props.post} auth={this.props.auth}/>
        </Col>
        </CardBlock>
      </Card>
    );
  }
}

export default PostCard;
