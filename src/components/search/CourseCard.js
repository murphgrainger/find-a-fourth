import React, { Component } from 'react';
import './card.css';

class CourseCard extends Component {
  constructor(props) {
  super(props);
  this.state = { greeting: 'Hello' };
  this.frenchify = this.frenchify.bind(this);
  this.removeGreeting = this.removeGreeting.bind(this);
}

removeGreeting() {
  this.props.removeGreeting(this.props.name);
}

frenchify() {
this.setState({ greeting: 'Bonjour' });
}

  render() {
    return (
      <div className="CourseCard">
      {this.props.name.course_name}!
      <br/>
      <button onClick={this.frenchify}>Join Group</button>
      </div>
    );
  }
}



export default CourseCard;
