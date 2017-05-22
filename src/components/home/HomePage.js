import React from 'react';
import {Link} from 'react-router';
import { Grid, Row, Col, Jumbotron, Container, Button, Nav, Card, CardTitle, CardBlock, CardText, ListGroup, ListGroupItem } from 'reactstrap';


import Icon from 'react-fontawesome';

import './home.css'

class HomePage extends React.Component {
    render() {
        return (
          <div className="container">
            <Jumbotron fluid className="home-jumbotron">
              <Container fluid>
                <h1 className="display-3">Compatible Golf Groupings</h1>
                <p className="lead">Search for an existing group that matches your preferences, or start one of your own.</p>
                  <p className="lead">
              <Button color="primary" className="jumbotron-button" href='/search'>Search</Button>
              <Button color="primary" className="jumbotron-button" href="/post">Post</Button>
            </p>
              </Container>
            </Jumbotron>
                <Row style={{width: '100%', padding:'1rem'}}>
                  <Col xs="12" md="8">
                    <h2>Search</h2>
                      <h6>Find an existing group based on search preferences.</h6>
                      <p><Icon name='filter' size='1x'/>&nbsp; Handicap</p>
                      <p> <Icon name='filter' size='1x'/>&nbsp; Age</p>
                      <p><Icon name='filter' size='1x'/>&nbsp; Gender</p>
                      <p>
                        <Button color="primary" href="/search">Search</Button>
                      </p>
                  </Col>
                  <Col xs="12" md="4">
                    <img src='https://placeholdit.imgix.net/~text?txtsize=33&txt=350%C3%97150&w=350&h=250'/>
                  </Col>
                  </Row>
                  <hr className="section-break"/>
                  <Row style={{width: '100%', padding:'1rem'}}>
                    <Col xs="12" md="4">
                      <img src='https://placeholdit.imgix.net/~text?txtsize=33&txt=350%C3%97150&w=350&h=250'/>
                  </Col>
                  <Col xs="12" md="8">
                    <h2>Post</h2>
                    <h6>Post an existing group with pre-selected preferences for the remaining golfers who will join.</h6>
                    <p><Icon name='refresh' size='1x'/>&nbsp; Preferences sync with golfer profiles and include handicap, age, and gender</p>
                    <p><Icon name='check' size='1x'/>&nbsp; Accept or reject join requests</p>
                    <p><Icon name='user' size='1x'/>&nbsp; Contact accepted group member to confirm addition to course tee time</p>
                  <p>
                    <Button color="primary" href="/post">Post</Button>
                  </p>
                  </Col>
                </Row>
            </div>
        );
    }
}

export default HomePage;
