import React, { Component } from 'react';
import './card.css';

import { Card, Button, CardHeader, CardText, Row, Col, CardDeck } from 'reactstrap';
import Icon from 'react-fontawesome';


class CourseCard extends Component {
  constructor(props) {
  super(props);
}

  render() {
    return (
      <Card className="CourseCard">
        <CardHeader className="date"> <Icon name='calendar' size='2x'/> &nbsp; {this.props.post.date}</CardHeader>
        <p className="preferences">Handicap: {this.props.post.handicap_min} to {this.props.post.handicap_max}</p>
        <p className="preferences">Age: {this.props.post.age_min} to {this.props.post.age_max}yrs</p>
        <p className="preferences">{this.props.post.group_count} Players</p>
        <p className="button-p">
        <Button bsStyle="success">Join</Button>
        </p>
      </Card>
    );
  }
}



export default CourseCard;
