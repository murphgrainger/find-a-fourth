import React from 'react';
import {Button} from 'reactstrap';
import moment from 'moment'

import { CardDeck, Jumbotron, Container, CardColumns } from 'reactstrap';


import PostCard from './PostCard';

import './search.css'

const LOCAL_URL= 'http://localhost:4000'


class SearchPage extends React.Component {
  constructor(props) {
  super(props);
  this.state = { posts: [] };
  this.getPosts = this.getPosts.bind(this);
}

componentDidMount() {
  this.getPosts()
}

    render() {
        return (
          <div className="container">
            <Jumbotron fluid>
              <Container fluid>
                <h1 className="display-3">Join a Group</h1>
                <p className="lead">Filter posts based on handicap, age, date, or group size.  Click "Join" to be added to the group.</p>
              </Container>
            </Jumbotron>
            <CardColumns>
            {this.renderPosts()}
          </CardColumns>
          </div>
        );
    }

    // getCourses() {
    //   let url = `${LOCAL_URL}/swingAPI`
    //   fetch(url, {
    // 	method: 'get',
    //   mode:'cors'
    // }).then(response => {
    // return response.json()
    //   }).then(data => {
    //   console.log(data)
    //   })
    // }

    getPosts() {
      let url = `${LOCAL_URL}/posts`;
      fetch(url, {
        method: 'get',
        mode: 'cors'
      }).then(res => {
        return res.json()
      }).then(data => {
        data.sort(function (left, right) {
        return moment.utc(left.date).diff(moment.utc(right.date))
      });
      data.forEach(e => {
        let str = e.date;
        let date = moment(str);
        e.date = date.utc().format('ddd, MMM Do');
      })
        this.setState({ posts: [...this.state.posts, ...data] });
      })
    }

    renderPosts() {
      return this.state.posts.map(post => (
        <PostCard
          key={post.id}
          post={post}
        />
      ));
    }



}

export default SearchPage;
