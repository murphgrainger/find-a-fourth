import React, { Component } from 'react';
import {Link} from 'react-router';

import { Row, Col, Form, FormControl, Button, ButtonGroup, FormGroup, ControlLabel, Container,InputGroup, InputGroupAddon, Input } from 'reactstrap';

import Tooltip from 'rc-tooltip';
import Slider from 'rc-slider';
import moment from 'moment';

import PostCard from '../search/PostCard'

import './profile.css'

import { API_URL } from './../../constants';


class ProfilePage extends Component {
  constructor(props) {
  super(props)
  this.state = {
    posts: []
  }
}

  componentWillMount() {
    this.setState({ profile: {} });
    const { userProfile, getProfile } = this.props.auth;
    if (!userProfile) {
      getProfile((err, profile) => {
        this.setState({ profile });
        this.getPreferences(this.state.profile.sub, this.state.profile.name)
        this.getPosts(this.state.profile.sub);
      });
    } else {
      this.getPosts(userProfile.sub);
      this.setState({ profile: userProfile })
    }
  }

  getPreferences(id, name) {
    let body = {
      id: id,
      name: name
    }
      const { authFetch } = this.props.auth;
      if (!this.props.auth.isAuthenticated()) {
        this.props.auth.login()
      } else {
      authFetch(`${API_URL}/users`, { method: 'POST', mode: 'cors' , body: JSON.stringify(body)})
      .then(res => {
        console.log(res);
        return res;
      }).then(data => {
        console.log('preferences',data);
      }).catch(err => {
        console.log(err)
      })
  }
    //take id of user, and get associated preferences

  }

  getPosts(id) {
    const { authFetch } = this.props.auth;
    authFetch(`${API_URL}/posts/${id}`)
    .then(res => {
      return res
    })
    .then(posts => {
      let filteredPosts = posts.filter((post) => {
        let date = post.date
        let now = moment()
        return now.diff(date) < 0;
      })
      filteredPosts.sort(function (left, right) {
      return moment.utc(left.date).diff(moment.utc(right.date))
    })
    filteredPosts.forEach(e => {
      let str = e.date;
      let date = moment(str);
      e.date = date.utc().format('ddd, MMM Do');
    })
      this.setState({ posts: filteredPosts })
    })
  }

    render() {
      const { profile } = this.state;
      const { posts } = this.state;
        return (
          <div>
            <div className="search-jumbotron">
              <Container fluid>
                <h3>My Account</h3>
              </Container>
            </div>
            <div className="search-holder">
              <Col xs="12" sm="12" md="3" className="sidebar">
                <ButtonGroup vertical>
                  <Button className="nav-options" onClick={this.props.auth.logout}>Log Out</Button>
                </ButtonGroup>
              </Col>
              <Col xs="12" sm="12" md="9" className="profile-info">
                <h1>{profile.name}</h1>
                <div className="current-posts">
                  <h4>Current Posts</h4>
                  <div>{this.renderPosts()}</div>
                </div>
              </Col>
            </div>
          </div>
        );
    }

renderPosts() {
    if (this.state.posts.length > 0) {
  return this.state.posts.map(post => (
    <PostCard
      key={post.id}
      post={post}
      {...this.props}
      />
    ))
  }
}
}



export default ProfilePage;
