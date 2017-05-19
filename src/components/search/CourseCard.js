import React, { Component } from 'react';
import './card.css';

import { Card, Button, CardHeader, CardText, Row, Col, CardDeck, ListGroup, ListGroupItem, CardBlock, CardFooter } from 'reactstrap';
import Icon from 'react-fontawesome';


class CourseCard extends Component {
  constructor(props) {
  super(props);
}

  render() {
    return (
      <Card inverse style={{ backgroundColor: '#63B995', borderColor: '#63B995' }} className="CourseCard">
        <CardHeader className="date">{this.props.post.date}&nbsp; &nbsp; <Icon name='calendar' size='2x'/> </CardHeader>
          <CardBlock>
          <ListGroup>
          <ListGroupItem>Handicap: {this.props.post.handicap_min} to {this.props.post.handicap_max}</ListGroupItem>
          <ListGroupItem>Age: {this.props.post.age_min} to {this.props.post.age_max}yrs</ListGroupItem>
          <ListGroupItem>{this.props.post.group_count} Players</ListGroupItem>
          </ListGroup>
        </CardBlock>
        <CardFooter><Button block style={{ backgroundColor: '#475B5A', borderColor: '#475B5A', color: 'white'}}>Join</Button></CardFooter>
      </Card>
    );
  }
}



export default CourseCard;
