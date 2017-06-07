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

import Callback from './Callback/Callback';
import Auth from './Auth/Auth';
import history from './history';

const auth = new Auth();

const handleAuthentication = (nextState, replace) => {
  if (/access_token|id_token|error/.test(nextState.location.hash)) {
    auth.handleAuthentication();
  }
}

// ReactDOM.render(
//   <Router>
//     <div>
//       <Header />
//       <Route exact path="/" component={Home}/>
//       <Route path="/profile" component={Profile}/>
//       <Route path="/search" component={Search}/>
//       <Route path="/post" component={Post}/>
//       <footer className="footer">
//         <small>&copy; 2017 | Murph Grainger</small>
//       </footer>
//     </div>
//   </Router>,
//   document.getElementById('root')
// );

export const makeMainRoutes = () => {
  return (
      <Router history={history} component={App}>
        <div>
          <Route path="/" render={(props) => <Home auth={auth} {...props} />} />
          <Route path="/home" render={(props) => <Home auth={auth} {...props} />} />
          <Route path="/callback" render={(props) => {
            handleAuthentication(props);
            return <Callback {...props} />
          }}/>
        </div>
      </Router>
  );
}
