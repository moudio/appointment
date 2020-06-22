import React from 'react';
import './UserBookings.css';
import { Link } from 'react-router-dom';

function UserBookings({ books, cars }) {
  console.log(cars);
  console.log(books);
  return (
    <div className="books">
      <h1> Your Bookings </h1>
      {cars.map((car, index) => {
        return (
          <div className="booking">
            <h3 className="car-model">{car.model}</h3>
            <h3 className="booking-city">{books[index].city}</h3>
            <h3>{books[index].date}</h3>
          </div>
        );
      })}
      <Link to="/">See all cars</Link>
    </div>
  );
}

export default UserBookings;
