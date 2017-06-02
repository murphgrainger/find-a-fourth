import React, { Component } from 'react';
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
        <Col xs="12" md="4" className="location-col">
          <p><Icon name='map-marker'/> &nbsp; {this.props.post.address}</p>
        </Col>
        <Col xs="12" md="3" className="centered-col">
          <small>Age Range</small>
          <p>{this.props.post.age_min} - {this.props.post.age_max}</p>
        </Col>
        <Col xs="12" md="3" className="centered-col">
          <small>Handicap Range</small>
          <p>{this.props.post.handicap_min} - {this.props.post.handicap_max}</p>
        </Col>
        <Col xs="12" md="2" className="centered-col">
          <small>Group Count</small>
          <p>{this.props.post.group_count}</p>
        </Col>
        </CardBlock>
      </Card>
    );
  }
}

// <Card inverse className="post-card">
//   <CardHeader className="date" style={{ backgroundColor: '#475B5A', borderColor: '#475B5A' }}>
//     <Row>
//     <Col xs="10" lg="10" className="date-col">
//     <Icon name='calendar'/> &nbsp; {this.props.post.date}
//     </Col>
//     <Col xs="2" lg="2" className="user-col">
//     <Icon name='user'/> <small>{this.props.post.group_count}</small>
//     </Col>
//     </Row>
//     </CardHeader>
//     <CardBlock>
//     <ListGroup>
//     <ListGroupItem className="preferences"> <Icon name='map-marker'/> &nbsp; {this.props.post.address}</ListGroupItem>
//     <ListGroupItem className="preferences">{this.props.post.handicap_min} to {this.props.post.handicap_max} Index</ListGroupItem>
//     <ListGroupItem className="preferences">{this.props.post.age_min} to {this.props.post.age_max} yrs</ListGroupItem>
//     </ListGroup>
//   </CardBlock>
//   <CardFooter><Button block className="color-hit-orange">Join</Button></CardFooter>
// </Card>

export default PostCard;
