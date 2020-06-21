import React from 'react';
import { connect } from 'react-redux';
import './CarBooking.css';
import { createBooking } from '../../actions/actions';
function CarBooking({ car, carReducer, startDate }) {
  return (
    <div className="carBooking">
      <div className={`car-img ${car.alt}`}></div>
      <div className="car-content">
        <h2>{car.model}</h2>
        <div className="details">
          <ul class="car-details">
            <li>Speed: {car.speed}</li>
            <li>Acceleration: {car.acceleration}</li>
            <li>Height: {car.height}</li>
            <li>Width: {car.width}</li>
            <li>Length: {car.length}</li>
          </ul>
          <label htmlFor="date">Pick a date</label>
          <input type="date" name="date" id="date" />

          <button
            className="book"
            onClick={() => {
              console.log('hello');
            }}
          >
            Book a drive
          </button>
        </div>
      </div>
    </div>
  );
}
const mapDispatchToProps = (dispatch) => ({
  handleBooking: (book) => {
    createBooking(book);
  },
});
const mapStateToProps = (state) => ({
  carReducer: state.carReducer,
});

export default connect(mapStateToProps, mapStateToProps)(CarBooking);
