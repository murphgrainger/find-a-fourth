import React from 'react';
import {Link} from 'react-router';
import { Grid, Row, Col } from 'react-flexbox-grid';

import './home.css'

class HomePage extends React.Component {
    render() {
        return (
          <div className>
            <Grid fluid>
              <Row>
                <Col xs={12} s={6} md={6}>
                </Col>
                <Col xs={12} s={6}md={6}>
                  <div>
                    <h4 className="headline">Golf with a compatible group</h4>
                    <ul className="list-items">
                      <li>Handicap</li>
                      <li> Age</li>
                      <li> Gender</li>
                      <li> Course</li>
                    </ul>
                </div>
                </Col>
              </Row>
            </Grid>
          </div>
        );
    }
}

export default HomePage;
