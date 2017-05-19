import React, { Component } from 'react';
import './card.css';

import { Card, Button, CardHeader, CardText, Row, Col, CardDeck, ListGroup, ListGroupItem, CardBlock, CardFooter } from 'reactstrap';
import Icon from 'react-fontawesome';


class PostCard extends Component {
  constructor(props) {
  super(props);
}

  render() {
    return (
      <Card inverse style={{ backgroundColor: '#63B995', border:'none' }} className="PostCard">
        <CardHeader className="date" inverse style={{ backgroundColor: '#475B5A', borderColor: '#475B5A' }}><Icon name='calendar' size='2x'/> &nbsp;{this.props.post.date}</CardHeader>
          <CardBlock>
          <ListGroup>
          <ListGroupItem className="preferences">{this.props.post.handicap_min} to {this.props.post.handicap_max} Index</ListGroupItem>
          <ListGroupItem className="preferences">{this.props.post.age_min} to {this.props.post.age_max} yrs</ListGroupItem>
          <ListGroupItem className="preferences">{this.props.post.group_count} Players</ListGroupItem>
          </ListGroup>
        </CardBlock>
        <CardFooter><Button block style={{ backgroundColor: '#475B5A', borderColor: '#475B5A', color: 'white'}}>Join</Button></CardFooter>
      </Card>
    );
  }
}



export default PostCard;
