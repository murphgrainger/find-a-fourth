import React from 'react';
import { Redirect } from 'react-router-dom';


import './post.css'
import 'rc-slider/assets/index.css';
import 'react-datepicker/dist/react-datepicker.css';


import { Row, Col, Form, Checkbox, Input, FormControl, Button, FormGroup, ControlLabel, Label, Jumbotron, Container, Card, CardTitle, CardText } from 'reactstrap';

const LOCAL_URL= 'http://localhost:4000'

class LocationForm extends React.Component {

  constructor(props) {
  super(props);
  this.state = {

};

}

    render() {
       const { redirect } = this.state;
       if (redirect) {
       return <Redirect to='/search'/>;
     }
        return (
          <div className="form-holder">
            <Jumbotron fluid className="search-jumbotron">
              <Container fluid>
                <h1 className="display-3">Select a Location</h1>
                <p className="lead">List your post with a specific course, or region you'd like to play.</p>
              </Container>
            </Jumbotron>
            <form onSubmit={this.formSubmit}>
              <Row className="top-row">
                <Col xs="12" sm="12" md="4" lg="4">
                  <p>Col 1</p>
                </Col>
                <Col xs="12" sm="12" md="4" lg="4">
                  <p> Col 2</p>
                </Col>
                <Col xs="12" sm="12" md="4" lg="4">
                  <p>Col 3</p>
                  </Col>
              </Row>
              <Row className="button-row">
              <Button type="submit" className="color-hit-orange">
                Next
              </Button>
              </Row>
              </form>
          </div>
        );
    }
}

export default LocationForm;
