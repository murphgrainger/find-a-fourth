import React from 'react';

import PostForm from './PostForm';
import LocationForm from './LocationForm';

import './post.css'

import moment from 'moment'

const LOCAL_URL = 'http://localhost:4000'

class PostPage extends React.Component {

  constructor(props) {
  super(props);
  this.state = {
    date: moment(),
    ageRange: [25, 45],
    handicapRange: [15, 25],
    gender: 'any',
    sizeGroup: 1,
    toLocation: false
};

this.onChildChange = this.onChildChange.bind(this)

}

  onChildChange(newState){
    this.postFunction(newState)
    this.setState(newState)
   }


    render() {
      const toLocation = this.state.toLocation;
      if (toLocation) {
        return <div>
                <LocationForm/>
              </div>
      } else {

        return (
          <div>
            <PostForm
              buttonClick={this.handleClick}
              onFormSubmit={(newState) => this.onChildChange(newState) }
              initialState= {this.state}/>
          </div>
        );
      }
    }


        postFunction(state) {
          let url = `${LOCAL_URL}/posts`;
          fetch(url, {
            method: 'POST',
            mode: 'cors',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
              },
            body: JSON.stringify(state)
          }).then(res => {
            return res.json()
          }).then(data => {
            this.setState({toLocation: true})
            console.log(this.state);
          }).catch(err => {
            console.log(err)
          })
        }
}

export default PostPage;
