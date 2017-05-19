import React from 'react';
import {Link} from 'react-router';
import { Grid, Row, Col, Jumbotron, Container, Button, Nav, Card, CardHeader, CardBlock, CardText, ListGroup, ListGroupItem } from 'reactstrap';

import './home.css'

class HomePage extends React.Component {
    render() {
        return (
          <div className="container">
            <Jumbotron fluid className="home-jumbotron">
              <Container fluid>
                <h1 className="display-3">Compatible Groups</h1>
                <p className="lead">Search or post tee times to play with golfers based on preferences.</p>
              </Container>
            </Jumbotron>
                <Row>
                <Col xs={6} md={6}>
                  <Card>
                    <CardHeader>Search</CardHeader>
                      <CardBlock>
                        <CardText>Find an existing group based on search preferences.</CardText>
                      <ListGroup>
                      <ListGroupItem className="preferences">Handicap</ListGroupItem>
                      <ListGroupItem className="preferences">Age</ListGroupItem>
                      <ListGroupItem className="preferences">Gender</ListGroupItem>
                      </ListGroup>
                    </CardBlock>
                    <p>
                      <Button bsStyle="primary" href="/search">Search</Button>
                    </p>
                  </Card>
                </Col>
                <Col xs={6} md={6}>
                    <Card>
                      <CardHeader>Post</CardHeader>
                        <CardBlock>
                          <CardText>Post an existing tee time with pre-selected preferences for the remaining golfers who will join the group.</CardText>
                        <ListGroup>
                        <ListGroupItem className="preferences">Preferences sync with golfer profiles and include handicap, age, and gender</ListGroupItem>
                        <ListGroupItem className="preferences">Accept or reject join requests</ListGroupItem>
                        <ListGroupItem className="preferences">Contact accepted group member to confirm addition to course tee time</ListGroupItem>
                        </ListGroup>
                      </CardBlock>
                    <p>
                      <Button bsStyle="primary" href="/post">Post</Button>
                    </p>
                  </Card>
                </Col>
                </Row>
            </div>
        );
    }
}

export default HomePage;
