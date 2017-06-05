import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import PostCard from './PostCard';


class JoinModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({
      modal: !this.state.modal
    });
    console.log('modal props', this.props.post);
  }

  render() {
    return (
      <div>
        <Button className="color-hit-orange" onClick={this.toggle}>Join</Button>
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          <ModalHeader toggle={this.toggle}>Confirm Join Request</ModalHeader>
          <ModalBody>
            {this.props.post.address}
            {this.props.post.date}
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
