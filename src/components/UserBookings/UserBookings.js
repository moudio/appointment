import React from 'react';
import './UserBookings.css';
import { Link } from 'react-router-dom';
import { cancelBooking } from '../../actions/actions';
import Loading from '../../Images/loading_white.gif';
import { connect } from 'react-redux';
import { AiOutlineFieldTime, AiTwotoneCar } from 'react-icons/ai';
import { MdLocationCity } from 'react-icons/md';
function UserBookings({ deleteBooking, userState }) {
  const { books, cars } = userState;

  function handleCancelBooking(bookingId) {
    let shouldDelete = window.confirm(
      'Do you really want to delete this booking?'
    );
    if (shouldDelete) {
      deleteBooking(bookingId);
    }
  }

  return (
    <div className="bookings">
      <h1> Your Bookings </h1>
      {books.map((book, index) => {
        return (
          <div className="booking">
            <div className="booking-content">
              <p className="car-model">
                <AiTwotoneCar /> <span>{cars[index].model}</span>
              </p>
              <p className="booking-city">
                <MdLocationCity />

                <span>{book.city} </span>
              </p>
              <p className="booking-date">
                {' '}
                <AiOutlineFieldTime />
                <span>{book.date} </span>
              </p>
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
              <button
                className="btn btn-warning update-booking-button"
                type="button"
                onClick={() => hanldeUpdateBooking(book.id)}
              >
                Update Booking
              </button>
            </div>
          </div>
        );
      })}
      <Link to="/" className="see-all-cars-link">
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
});

export default connect(mapStateToProps, mapDispatchToProps)(UserBookings);
