import React from 'react';
import './Car.css';
import { Link } from 'react-router-dom';

function Car({ car }) {
  return (
    <div className="section">
      <div className="inner-section">
        <div className={`picture section-${car.alt}`} />
        <div className="content">
          <h2>{car.model}</h2>
          <p>{car.description}</p>
          <button type="button" className="book-ride">
            <Link to="/car">Book a ride</Link>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Car;
