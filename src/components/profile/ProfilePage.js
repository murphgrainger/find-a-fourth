import React from 'react';
import {Link} from 'react-router';

class ProfilePage extends React.Component {
    render() {
        return (
          <div className = "container">
            <h1>My Profile</h1>
            <p>Murph Grainger</p>
            <p>Handicap: 12</p>
            <p>Female</p>
            <p>24</p>
          </div>
        );
    }
}

export default ProfilePage;
