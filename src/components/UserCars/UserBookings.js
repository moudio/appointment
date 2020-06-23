import React from 'react';
import './UserBookings.css';
import { Link } from 'react-router-dom';

function UserBookings({ books, cars }) {
  function cancelBooking(bookingId) {}

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
              <button class="btn btn-danger" onClick={}>
                Cancel
              </button>
            </div>
          </div>
        );
      })}
      <Link to="/">See all cars</Link>
    </div>
  );
}

export default UserBookings;
