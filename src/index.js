import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import './index.css';

ReactDOM.render(
  <Router>
    <div>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
      </ul>

      <hr/>

      <Route exact path="/" component={Home}/>
      <Route path="/about" component={About}/>
    </div>
  </Router>
  document.getElementById('root')
);
