import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { createBooking, makeBookingPropertyFalse } from '../../actions/actions';
import Loading from '../../Images/loading_white.gif';
import './CarBooking.css';

function CarBooking({
  car,
  postBooking,
  user,
  carsState,
  history,
  removeBookingCreated,
}) {
  function handleBooking() {
    const book = {
      car_id: car.id,
      user_id: user.id,
      date: document.querySelector('#date').value,
      city: document.querySelector('#city').value,
    };
    postBooking(book);
  }

  function redirectToDashboard() {
    history.push('/user');
    resetBookingFail();
  }

  function redirectToCars() {
    history.push('/');
    resetBookingFail();
  }

  if (carsState.booking_created) {
    history.push('/user');
    removeBookingCreated();
  }

  if (carsState.booking_creation_fail) {
    console.log('booking creation fail');
  }

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
          <label htmlFor="city"> Choose a city </label>
          <select name="city" id="city">
            <option value="Dakar" selected>
              Dakar
            </option>
            <option value="Paris">Paris</option>
            <option value="New York">New York</option>
            <option value="Beijing">Beijing</option>
            <option value="Berlin">Berlin</option>
            <option value="London">London</option>
          </select>
          <button
            className="book"
            onClick={() => {
              handleBooking();
            }}
          >
            Book a drive
          </button>
        </div>
      </div>
      {carsState.creating_booking ? (
        <div className="creating-booking">
          <h2>Creating Your Booking...</h2>
          <div className="animation-picture">
            <img src={Loading} alt="Creating your booking" />
          </div>
        </div>
      ) : null}
      {carsState.booking_fail_message ? (
        <div className="booking-fail-message">
          <p>{carsState.booking_fail_message}</p>
          <button class="btn btn-success" onClick={() => redirectToDashboard()}>
            Go To Your Dashboard
          </button>
          <button class="btn btn-info" onClick={() => redirectToCars()}>
            Book Other Cars
          </button>
        </div>
      ) : null}
    </div>
  );
}
const mapDispatchToProps = (dispatch) => ({
  postBooking: (book) => {
    dispatch(createBooking(book));
  },
  removeBookingCreated: () => {
    dispatch(makeBookingPropertyFalse());
  },
  resetBookingFail: () => {
    dispatch(resetBookingFailParams());
  },
});
const mapStateToProps = (state) => ({
  carsState: state.carsReducer,
  user: state.userReducer.user,
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(CarBooking));
