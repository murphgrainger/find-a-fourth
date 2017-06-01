import React from 'react';
import {Button} from 'reactstrap';
import moment from 'moment'

import { CardDeck, Jumbotron, Container, Col } from 'reactstrap';

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
    ageRange: [17, 75],
    groupSize: [1, 3],
    genderVal: 'any'
  };
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

onChildSizeChanged(newState) {
    this.setState({ groupSize: newState })
  }

onChildGenderChanged(newState) {
    this.setState({ genderVal: newState.target.value })
  }

    render() {
        return (
          <div>
            <div className="search-holder">
              <FilterRow
                initialHandicap={this.state.handicapRange}
                initialAge={this.state.ageRange}
                initialSize={this.state.groupSize}
                initalGender={this.state.genderVal}
                callbackHandicapParent={(newState) => this.onChildHandicapChanged(newState) }
                callbackAgeParent={(newState) => this.onChildAgeChanged(newState) }
                callbackSizeParent={(newState) => this.onChildSizeChanged(newState) }
                callbackGenderParent={(newState) => this.onChildGenderChanged(newState) }/>
              <Col xs="12" md="9" className="card-col">
                <div className="search-jumbotron">
                  <Container fluid>
                    <h3>Join a Group</h3>
                    <p>Filter posts based on handicap, age, date, or group size.  Click "Join" to be added to the group.</p>
                  </Container>
                </div>
              <div className="card-holder">
                {this.renderPosts()}
              </div>
              </Col>
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
        console.log(data);
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
      let filteredPosts = this.state.posts.filter((post) => {
          return !(post.handicap_min >= this.state.handicapRange[1]) &&
          !(post.handicap_max <= this.state.handicapRange[0]) &&
          !(post.age_min >= this.state.ageRange[1]) &&
          !(post.age_max <= this.state.ageRange[0]) &&
          post.group_count >= this.state.groupSize[0] &&
          post.group_count <= this.state.groupSize[1] &&
          (post.gender === this.state.genderVal ||
          this.state.genderVal === 'any')
        })

      return filteredPosts.map(post => (
        <PostCard
          key={post.id}
          post={post}
        />
      ));
    }



}

export default SearchPage;
