import React from 'react';
import { Redirect } from 'react-router-dom'

import PostForm from './PostForm';
import LocationForm from './LocationForm';
import PreviewPost from './PreviewPost';

import { API_URL } from './../../constants';

import moment from 'moment';

class PostPage extends React.Component {

  constructor(props) {
  super(props);
  this.state = {
    currentUserId: 1,
    date: moment(),
    ageRange: [25, 45],
    handicapRange: [15, 25],
    gender: 'any',
    sizeGroup: 1,
    toLocation: false,
    toPreview: false,
    address: '',
    geocodeResults: [],
    redirect: false
};

this.onChildChange = this.onChildChange.bind(this)
this.onLocationChange = this.onLocationChange.bind(this)
this.postFunction = this.postFunction.bind(this)
this.editPostForm = this.editPostForm.bind(this)

}

  onChildChange(newState){
    this.setState(newState)
    this.setState({toLocation: true})
   }

   onLocationChange(newState){
     this.setState(newState)
     this.setState({toPreview: true, toLocation: false})
    }


    render() {
      const toLocation = this.state.toLocation;
      const toPreview = this.state.toPreview;
      const { redirect } = this.state;
      if (redirect) {
      return <Redirect to='/search'/>
      }
      else if (toLocation) {
        return <div>
                <LocationForm
                  initialState= {this.state}
                  onFormSubmit={(newState) => this.onLocationChange(newState) }/>
              </div>
      } else if(!toLocation && !toPreview) {
        return (
          <div>
            <PostForm
              buttonClick={this.handleClick}
              onFormSubmit={(newState) => this.onChildChange(newState) }
              initialState= {this.state}/>
          </div>
        )
      } else if(toPreview) {
        return (
          <div>
            <PreviewPost
              initialState= {this.state}
              editForm = {this.editPostForm}
              submitFinalForm={this.postFunction}/>
          </div>
        )
      }
    }

      editPostForm() {
        console.log('Need to edit this form!');
        this.setState({toLocation: false, toPreview: false
        })
      }

      postFunction() {
        const { authFetch } = this.props.auth;
        if (!this.props.auth.isAuthenticated()) {
          this.props.auth.login()
        } else {
          console.log(this.state);
        authFetch(`${API_URL}/posts`, { method: 'POST', mode: 'cors' , body: JSON.stringify(this.state)})
        .then(res => {
          console.log(res);
          return res;
        }).catch(err => {
          console.log(err);
        }).then(data => {
          this.setState({ redirect: true })
        }).catch(err => {
          console.log(err)
        })
      }
    }
}


export default PostPage;
