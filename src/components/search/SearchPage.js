import React from 'react';
import {Button} from 'reactstrap';
import moment from 'moment'

import { CardDeck } from 'reactstrap';


import CourseCard from './CourseCard';

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
            <h1>Join a Group</h1>
            <CardDeck>
            {this.renderPosts()}
            </CardDeck>
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
        console.log(e.date);
        let str = e.date;
        let date = moment(str);
        e.date = date.utc().format('ddd, MMM Do');
        console.log(e.date);
      })
        this.setState({ posts: [...this.state.posts, ...data] });
      })
    }

    renderPosts() {
      return this.state.posts.map(post => (
        <CourseCard
          key={post.id}
          post={post}
        />
      ));
    }



}

export default SearchPage;
