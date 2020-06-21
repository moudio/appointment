import React from 'react';
import './CarBooking.css';
function CarBooking({ car }) {
  return (
    <div className="carBooking">
      <div className={`car-img ${car.alt}`}></div>
      <div className="car-content">
        <h2>{car.model}</h2>
        <div className="details">
          <ul>
            <li>Speed: {car.speed}</li>
            <li>Acceleration: {car.acceleration}</li>
            <li>Height: {car.height}</li>
            <li>Width: {car.width}</li>
            <li>Length: {car.length}</li>
          </ul>
          <button className="book">Book a drive</button>
        </div>
      </div>
    </div>
  );
}

export default CarBooking;
