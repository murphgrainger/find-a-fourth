import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

import './index.css';

import Header from './components/common/Header';
import Home from './components/home/HomePage';
import About from './components/about/AboutPage';
import Courses from './components/courses/CoursesPage';
import Profile from './components/profile/ProfilePage';

ReactDOM.render(
  <Router>
    <div>
      <Header />
      <Route exact path="/" component={Home}/>
      <Route path="/about" component={About}/>
      <Route path="/profile" component={Profile}/>
      <Route path="/courses" component={Courses}/>
    </div>
  </Router>,
  document.getElementById('root')
);
