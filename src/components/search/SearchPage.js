import React from 'react';
import {Button} from 'react-bootstrap';

import './search.css'

class SearchPage extends React.Component {

  constructor(props) {
  super(props);
  this.state = {};
  this.getCourse = this.getCourse.bind(this);
}

getCourse() {
  let url = 'http://localhost:4000/fourth'
  fetch(url, {
	method: 'get',
  mode:'cors'
}).then(response => {
return response.text()
  }).then(data => {
  console.log(data)
})
}
    render() {
        return (
          <div className="container">
            <h1>Search for Tee Times</h1>
            <Button bsStyle="primary" onClick={this.getCourse}>Get Course</Button>
          </div>
        );
    }
}

export default SearchPage;
