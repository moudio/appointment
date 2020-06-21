import React from 'react';
import './UserCars.css';
import { Link } from 'react-router-dom';

function UserCars({ cars }) {
  return (
    <div>
      <h1> Your Bookings </h1>
      {cars.map((car) => (
        <div className="user_car">
          <div className="car_model">
            <h3>{car.model}</h3>
          </div>
          <div className="car-picture" />
        </div>
      ))}
      <Link to="/">See all cars</Link>
    </div>
  );
}

export default UserCars;
