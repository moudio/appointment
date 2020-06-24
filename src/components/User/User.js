import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import './User.css';
import UserBookings from '../UserCars/UserBookings';
import profile from '../../Images/profile.jpg';
import { connect } from 'react-redux';
import {
  makeBookingPropertyFalse,
  fetchUserBookings,
} from '../../actions/actions';
function User({ userStatus, getUserBookings }) {
  const { user, books } = userStatus;

  useEffect(() => {
    getUserBookings(user.id);
  }, []);

  if (userStatus.deleting_booking === false) {
    getUserBookings(user.id);
  }
  console.log('books are ', books);
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
          <div className="profile-content-navigation"></div>
          <div className="books">
            {books && books.length > 0 ? (
              <>
                <UserBookings />
              </>
            ) : (
              <h2>
                You have no bookings yet, <Link to="/">Create one!</Link>{' '}
              </h2>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => ({
  carsStatus: state.carsReducer,
  userStatus: state.userReducer,
});

const mapDispatchToProps = (dispatch) => ({
  removeBookingCreated: () => {
    dispatch(makeBookingPropertyFalse());
  },
  getUserBookings: (userId) => {
    dispatch(fetchUserBookings(userId));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(User);
