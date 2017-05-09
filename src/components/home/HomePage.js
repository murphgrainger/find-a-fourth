import React from 'react';
import {Link} from 'react-router';
import { Grid, Row, Col, Jumbotron, Button, Thumbnail, Nav } from 'react-bootstrap';

import './home.css'

class HomePage extends React.Component {
    render() {
        return (
          <div>
              <Jumbotron>
                <div className="container">
                    <h1 className="headline">Compatible Groups</h1>
                    <p>Search or post tee times to play with golfers based on preferences.</p>
               </div>
              </Jumbotron>
              <Grid>
                <Row>
                <Col xs={6} md={6}>
                  <Thumbnail>
                    <h3>Search</h3>
                    <p>Find an existing group via multiple methods:</p>
                    <ul>
                      <li>Time Span</li>
                      <li>Course or Region</li>
                      <li>Handicap</li>
                      <li>Age or Gender</li>
                    </ul>
                    <p>
                      <Button bsStyle="primary" href="/search">Search</Button>
                    </p>
                  </Thumbnail>
                </Col>
                <Col xs={6} md={6}>
                  <Thumbnail>
                    <h3>Post</h3>
                    <p>Post an existing tee time with pre-selected preferences for the remaining golfers who will join the group:</p>
                      <ul>
                        <li>Preferences sync with golfer profiles and include handicap, age, and gender</li>
                        <li>Accept or reject join requests</li>
                        <li>Contact accepted group member to confirm addition to course tee time</li>
                      </ul>
                    <p>
                      <Button bsStyle="primary" href="/post">Post</Button>
                    </p>
                  </Thumbnail>
                </Col>
                </Row>
            </Grid>

          </div>
        );
    }
}

export default HomePage;
