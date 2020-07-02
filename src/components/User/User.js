import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './User.css';
import { connect } from 'react-redux';
import UserBookings from '../UserBookings/UserBookings';
import profile from '../../Images/profile.jpg';
import {
  makeBookingPropertyFalse,
  fetchUserBookings,
  makeDeleteBookPropFalse,
} from '../../actions/actions';

function User({
  userStatus,
  getUserBookings,
  carsStatus,
  removeBookingCreated,
  makeDeletingBookFalse,
}) {
  const { user, books } = userStatus;

  useEffect(() => {
    getUserBookings(user);
    if (document.querySelector('.menu-icon')) {
      document.querySelector('.menu-icon').classList.remove('menu-white');
    }
    // eslint-disable-next-line
  }, []);

  if (carsStatus.booking_created === true) {
    removeBookingCreated();
  }

  if (userStatus.deleting_booking === false) {
    getUserBookings(user);
    makeDeletingBookFalse();
  }

  return (
    <div className="user-div" data-testid="user-dashboard">
      <div className="profile">
        <div className="profile-header">
          <div className="picture-div">
            <img src={profile} alt="profile" className="picture-img" />
          </div>
          <div className="profile-details">
            <h1>
              Welcome,
              {` ${user}`}
            </h1>
            <p>Car lover</p>
          </div>
        </div>
        <div className="profile-content">
          <div className="profile-content-navigation" />
          <div className="books">
            {books && books.length > 0 ? (
              <>
                <UserBookings />
              </>
            ) : (
              <div className="no-booking-yet">
                <p>
                  You have no bookings yet,
                  {' '}
                  <Link to="/cars">Create one!</Link>
                  {' '}
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

User.propTypes = {
  userStatus: PropTypes.shape({
    books: PropTypes.instanceOf(Object),
    user: PropTypes.instanceOf(Object),
    userId: PropTypes.number,
    deleting_booking: PropTypes.bool,
  }).isRequired,
  getUserBookings: PropTypes.func.isRequired,
  carsStatus: PropTypes.shape({
    booking_created: PropTypes.bool,
  }).isRequired,
  removeBookingCreated: PropTypes.func.isRequired,
  makeDeletingBookFalse: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  carsStatus: state.carsReducer,
  userStatus: state.userReducer,
});

const mapDispatchToProps = dispatch => ({
  removeBookingCreated: () => {
    dispatch(makeBookingPropertyFalse());
  },
  getUserBookings: username => {
    dispatch(fetchUserBookings(username));
  },
  makeDeletingBookFalse: () => {
    dispatch(makeDeleteBookPropFalse());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(User);
