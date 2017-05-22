import React from 'react';
import {Button} from 'reactstrap';
import moment from 'moment'

import { CardDeck, Jumbotron, Container } from 'reactstrap';

import FilterRow from '../filter/FilterRow';
import PostCard from './PostCard';


import './search.css'
import '../../App.css'


const LOCAL_URL= 'http://localhost:4000'


class SearchPage extends React.Component {
  constructor(props) {
  super(props);
  this.state = {
    posts: [],
    handicapRange: [5, 35],
    ageRange: [17, 75]};
  this.getPosts = this.getPosts.bind(this);
}

componentDidMount() {
  this.getPosts()
}

onChildHandicapChanged(newState) {
     this.setState({ handicapRange: newState })
   }

 onChildAgeChanged(newState) {
      this.setState({ ageRange: newState })
    }

    render() {
        return (
          <div>
            <Jumbotron fluid className="search-jumbotron">
              <Container fluid>
                <h1 className="display-3">Join a Group</h1>
                <p className="lead">Filter posts based on handicap, age, date, or group size.  Click "Join" to be added to the group.</p>
              </Container>
            </Jumbotron>
            <FilterRow
              initialHandicap={this.state.handicapRange}
              initialAge={this.state.ageRange}
              callbackHandicapParent={(newState) => this.onChildHandicapChanged(newState) }
              callbackAgeParent={(newState) => this.onChildAgeChanged(newState) }/>
            <div className="card-holder">
            {this.renderPosts()}
          </div>
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
      // let filteredPosts = this.props.posts.filter(
      //   (post) ={
      //     return post.handicap.indexOf(this.state.handicapRange[0]) !== -1;
      //   }
      // )

      return this.state.posts.map(post => (
        <PostCard
          key={post.id}
          post={post}
        />
      ));
    }



}

export default SearchPage;
