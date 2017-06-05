import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

import './index.css';
import 'bootstrap/dist/css/bootstrap.css';


import Header from './components/common/Header';
import Home from './components/home/HomePage';
import Search from './components/search/SearchPage';
import Post from './components/post/PostPage';
import Profile from './components/profile/ProfilePage';

ReactDOM.render(
  <Router>
    <div>
      <Header />
      <Route exact path="/" component={Home}/>
      <Route path="/profile" component={Profile}/>
      <Route path="/search" component={Search}/>
      <Route path="/post" component={Post}/>
      <footer className="footer">
        <small>&copy; 2017 | Murph Grainger</small>
      </footer>
    </div>
  </Router>,
  document.getElementById('root')
);
