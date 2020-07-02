import React from 'react';
import PropTypes from 'prop-types';
import './UserBookings.css';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { AiOutlineFieldTime, AiTwotoneCar } from 'react-icons/ai';
import { MdLocationCity } from 'react-icons/md';
import Loading from '../../Images/loading_white.gif';
import { cancelBooking, bookUpdateAction } from '../../actions/actions';

function UserBookings({ deleteBooking, userState, updateBooking, history }) {
  const { books, cars } = userState;

  function handleCancelBooking(bookingId) {
    /* eslint-disable no-alert */
    const shouldDelete = window.confirm('Do you really want to delete this booking?');
    if (shouldDelete) {
      deleteBooking(bookingId);
    }
  }

  if (userState.should_go_to_update) {
    history.push(`/update/${userState.carToUpdate.alt}`);
    /* eslint-disable no-param-reassign */
    userState.redirect_after_patching = false;
  }

  function handleUpdateBooking(bookingId) {
    updateBooking(bookingId);
  }

  return (
    <div className="bookings">
      <h1> Your Bookings </h1>
      {books.map((book, index) => (
        <div className="booking" key={`${cars[index].model}${new Date().getTime()}`}>
          <div className="booking-content">
            <p className="car-model">
              <AiTwotoneCar />
              <span>{cars[index].model}</span>
            </p>
            <p className="booking-city">
              <MdLocationCity />

              <span>
{book.city}
{' '}
 </span>
            </p>
            <p className="booking-date">
              {' '}
              <AiOutlineFieldTime />
              <span>
{book.date}
{' '}
 </span>
            </p>
          </div>
          <div className="booking-buttons">
            <button
              className="btn btn-danger cancel-booking-button "
              type="button"
              onClick={() => handleCancelBooking(book.id)}
            >
              {userState.book_to_destroy === book.id ? (
                <img src={Loading} alt="Deleting booking..." className="deleting-booking-spinner" />
              ) : (
                'Cancel Booking'
              )}
            </button>
            <button
              className="btn btn-warning update-booking-button"
              type="button"
              onClick={() => handleUpdateBooking(book.id)}
            >
              Update Booking
            </button>
          </div>
        </div>
      ))}
      <Link to="/cars" className="see-all-cars-link">
        See all cars
        {' >> '}
      </Link>
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
  updateBooking: (bookId) => {
    dispatch(bookUpdateAction(bookId));
  },
});

UserBookings.propTypes = {
  deleteBooking: PropTypes.func.isRequired,
  updateBooking: PropTypes.func.isRequired,
  userState: PropTypes.shape({
    books: PropTypes.instanceOf(Object),
    cars: PropTypes.instanceOf(Object),
    should_go_to_update: PropTypes.bool,
    carToUpdate: PropTypes.instanceOf(Object),
    redirect_after_patching: PropTypes.bool,
    book_to_destroy: PropTypes.instanceOf(Object),
  }).isRequired,
  history: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(UserBookings));
