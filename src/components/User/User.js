import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import './User.css';
import UserBookings from '../UserCars/UserBookings';
import profile from '../../Images/profile.jpg';

function User({ userStatus }) {
  const { user, cars, books } = userStatus;
  console.log(userStatus);
  return (
    <div className="user-div">
      <div className="profile">
        <div className="profile-header">
          <div className="picture-div">
            <img src={profile} alt="profile" className="picture-img" />
          </div>
          <div className="profile-details">
            <h1>{user.username}</h1>
            <p>Car lover</p>
          </div>
        </div>
        <div className="profile-content">
          <div className="profile-content-navigation">
            <Router>
              <ul className="nav-list">
                <li>
                  <Link to="/books">Books</Link>
                </li>
                <li>
                  <Link to="/books">Books</Link>
                </li>
              </ul>
            </Router>
          </div>
          <div className="books">
            {cars && cars.length > 0 ? (
              <>
                <UserBookings books={books} cars={cars} />
              </>
            ) : (
              <h2>
                You have no bookings yet, <Link to="/">create one!</Link>{' '}
              </h2>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default User;
