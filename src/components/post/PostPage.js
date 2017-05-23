import React from 'react';
import { Redirect } from 'react-router-dom';

import PostForm from './PostForm';
import './post.css'

import moment from 'moment'


class PostPage extends React.Component {

  constructor(props) {
  super(props);
  this.state = {
    date: moment(),
    ageRange: [25, 45],
    handicapRange: [15, 25],
    gender: 'any',
    sizeGroup: 1,
    redirect: false
};

this.onChildChange = this.onChildChange.bind(this)

}


handleClick(e) {
  console.log(e);
  console.log('clicked from parent');
}

  onChildChange(newState){
    console.log('parent state', newState);
    this.setState(newState)
   }


    render() {
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

export default PostPage;
