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
    console.log(this.props.auth);
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
            <Row>
            <Col sm='12' md='6'>
            <Card className="preview-card">
              <CardHeader>Post</CardHeader>
              <CardBlock className="card-column">
                <p><Icon name='calendar'/> &nbsp; {this.props.post.date} </p>
                <p><Icon name='map-marker'/> &nbsp; {this.props.post.address}</p>
                <Row>
                  <Col sm="12" md="6" className="preview-card-detail-col">
                <small>Age Range</small>
                <p>{this.props.post.age_min} - {this.props.post.age_max}</p>
                </Col>
                  <Col sm="12" md="6" className="preview-card-detail-col">
                <small>Handicap Range</small>
                <p>{this.props.post.handicap_min} - {this.props.post.handicap_max}</p>
                </Col>
              </Row>
              </CardBlock>
            </Card>
          </Col>
            <Col sm='12' md='6'>
              <Card className="preview-card">
                <CardHeader> Profile </CardHeader>
                <CardBlock className="card-column">
                  <p><Icon name='user'/> &nbsp; Johnny Jones</p>
                  <p><Icon name='map-marker'/> &nbsp; Sunnyside, CO</p>
                  <Row>
                  <Col sm="12" md="6" className="preview-card-detail-col">
                    <small>Age</small>
                    <p>25</p>
                  </Col>
                  <Col sm="12" md="6" className="preview-card-detail-col">
                    <small>Handicap</small>
                    <p>8</p>
                  </Col>
                </Row>
                </CardBlock>
              </Card>
            </Col>
            </Row>
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
