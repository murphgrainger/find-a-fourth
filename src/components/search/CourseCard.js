import React, { Component } from 'react';
import './card.css';

import { Grid, Row, Col, Button, Thumbnail } from 'react-bootstrap';


class CourseCard extends Component {
  constructor(props) {
  super(props);
  this.state = { greeting: 'Hello' };
  this.frenchify = this.frenchify.bind(this);
}

frenchify() {
this.setState({ greeting: 'Bonjour' });
}

  render() {
    return (
      <div className="CourseCard">
          <Col xs={6} md={4}>
            <Thumbnail>
              <h3>{this.props.post.course_name}</h3>
              <p>{this.props.post.course_address}</p>
              <p>{this.props.post.course_phone}</p>
              <p>{this.props.post.date} at {this.props.post.time}</p>
              <p>Greens Fee: ${this.props.post.cost}</p>
              <p>{this.props.post.group_count} Players</p>
              <p>
                <Button bsStyle="success" onClick={this.frenchify}>Request to Join</Button>&nbsp;
              </p>
            </Thumbnail>
          </Col>
      </div>
    );
  }
}



export default CourseCard;
