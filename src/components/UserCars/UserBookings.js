import React, { useState } from 'react';
import './UserBookings.css';
import { Link } from 'react-router-dom';
import { cancelBooking } from '../../actions/actions';
import Loading from '../../Images/loading_white.gif';
import { connect } from 'react-redux';

function UserBookings({ deleteBooking, userState }) {
  const { books, cars } = userState;
  function handleCancelBooking(bookingId) {
    deleteBooking(bookingId);
  }

  return (
    <div className="bookings">
      <h1> Your Bookings </h1>
      {books.map((book, index) => {
        return (
          <div className="booking">
            <div className="booking-content">
              <h3 className="car-model">{cars[index].model}</h3>
              <h3 className="booking-city">{book.city}</h3>
              <h3>{book.date}</h3>
            </div>
            <div className="booking-buttons">
              <button
                className="btn btn-danger cancel-booking-button "
                type="button"
                onClick={() => handleCancelBooking(book.id)}
              >
                {userState.book_to_destroy === book.id ? (
                  <img
                    src={Loading}
                    alt="Deleting booking..."
                    className="deleting-booking-spinner"
                  />
                ) : (
                  'Cancel Booking'
                )}
              </button>
            </div>
          </div>
        );
      })}
      <Link to="/">See all cars</Link>
    </div>
  );
}

const mapStateToProps = (state) => ({
  userState: state.userReducer,
});
const mapDispatchToProps = (dispatch) => ({
  deleteBooking: (bookId) => {
    dispatch(cancelBooking(bookId));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(UserBookings);
