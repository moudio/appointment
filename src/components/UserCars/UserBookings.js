import React from 'react';
import './UserBookings.css';
import { Link } from 'react-router-dom';
import { cancelBooking } from '../../actions/actions';
import Loading from '../../Images/loading_white.gif';
import { connect } from 'react-redux';

function UserBookings({ books, cars, deleteBooking, userState }) {
  function handleCancelBooking(bookingId) {
    deleteBooking(bookingId);
  }

  if (userState.book_to_destroy) {
  }

  console.log(userState);

  return (
    <div className="bookings">
      <h1> Your Bookings </h1>
      {cars.map((car, index) => {
        return (
          <div className="booking">
            <div className="booking-content">
              <h3 className="car-model">{car.model}</h3>
              <h3 className="booking-city">{books[index].city}</h3>
              <h3>{books[index].date}</h3>
            </div>
            <div className="booking-buttons">
              <button
                className="btn btn-danger cancel-booking-button "
                type="button"
                onClick={() => handleCancelBooking(books[index].id)}
              >
                {userState.book_to_destroy === books[index].id ? (
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
