import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Col, CardHeader, Card, CardBlock, Row } from 'reactstrap';
import PostCard from './PostCard';

import Icon from 'react-fontawesome';

class JoinModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
   if (this.props.auth.isAuthenticated()) {
      this.setState({
        modal: !this.state.modal
      });
    } else {
      this.props.auth.login()
    }
  }

  render() {
    return (
      <div>
        <Button className="color-hit-orange" onClick={this.toggle}>Join</Button>
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          <ModalHeader toggle={this.toggle}>Confirm Join Request</ModalHeader>
          <ModalBody>
            <Card className="preview-card">
              <CardHeader>{this.props.post.date}</CardHeader>
              <CardBlock className="card-column">
                <p><Icon name='map-marker'/> &nbsp; {this.props.post.address}</p>
                <Row>
                <Col sm='12' md='5'>
                  <img id="map" src='http://www.wynstone.org/images/dynamic/getImage.gif?ID=100087'/>
                </Col>
                  <Col sm="12" md="4" className="preview-card-detail-col">
                    <small>Age Range</small>
                    <p>{this.props.post.age_min} - {this.props.post.age_max}</p>
                    <small>Handicap Range</small>
                    <p>{this.props.post.handicap_min} - {this.props.post.handicap_max}</p>
                  </Col>
                <Col sm="12" md="3" className="preview-card-detail-col">
                  <small>My Age</small>
                  <p>25</p>
                  <small>My Handicap</small>
                  <p>11</p>
                </Col>
              </Row>
            </CardBlock>
            </Card>
          </ModalBody>
          <ModalFooter>
            <Button color="secondary" onClick={this.toggle}>Cancel</Button>
            <Button className="color-hit-orange" onClick={this.toggle}>Join</Button>{' '}
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

export default JoinModal;
