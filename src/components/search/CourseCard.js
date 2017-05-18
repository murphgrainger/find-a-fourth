import React, { Component } from 'react';
import './card.css';

import { Grid, Row, Col, Button, Thumbnail } from 'react-bootstrap';


class CourseCard extends Component {
  constructor(props) {
  super(props);
}

frenchify() {
this.setState({ greeting: 'Bonjour' });
}

  render() {
    return (
      <div className="CourseCard">
          <Col xs={6} md={4}>
            <Thumbnail>
              <p>{this.props.post.date}</p>
              <p>Handicap: {this.props.post.handicap_min} to {this.props.post.handicap_max}</p>
              <p>Age: {this.props.post.age_min} to {this.props.post.age_max}yrs</p>
              <p>{this.props.post.group_count} Players</p>
              <p>
                <Button bsStyle="success">Request to Join</Button>&nbsp;
              </p>
            </Thumbnail>
          </Col>
      </div>
    );
  }
}



export default CourseCard;
