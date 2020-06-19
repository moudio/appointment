import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import './User.css';
import profile from '../../Images/profile.jpg';
function User({ user }) {
  return (
    <div className="user-div">
      <div className="profile">
        <div className="picture-div">
          <img src={profile} alt="profile" className="picture-img" />
        </div>
        <div className="profile-details">
          <h1>{user.username}</h1>
          <p>Car lover</p>
        </div>
        <div className="profile-content">
          <div className="profile-content-navigation">
            <Router>
              <ul>
                <Link to="/books">Books</Link>
                <Link to="/books">Books</Link>
              </ul>
            </Router>
          </div>
        </div>
      </div>
    </div>
  );
}

export default User;
