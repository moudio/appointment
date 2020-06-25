import React from 'react';
import { connect } from 'react-redux';
import { withRouter, Link } from 'react-router-dom';
import {
  createBooking,
  makeBookingPropertyFalse,
  resetBookingFailParams,
} from '../../actions/actions';
import Loading from '../../Images/loading_white.gif';
import './CarBooking.css';

function CarBooking({
  car,
  postBooking,
  user,
  carsState,
  history,
  removeBookingCreated,
  resetBookingFail,
}) {
  function handleBooking() {
    let date = document.querySelector('#date').value;
    if (!date) {
      date = new Date().toISOString().split('T')[0];
    }

    const book = {
      car_id: car.id,
      user_id: user.id,
      date,
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

  if (carsState.booking_created === true) {
    history.push('/user');
  }

  if (carsState.booking_creation_fail) {
    console.log('booking creation fail');
  }

  function scrollToTop() {
    window.scrollTo(0, 0);
  }

  function handleDatePicking() {
    let datePicker = document.querySelector('#date');
    datePicker.min = new Date().toISOString().split('T')[0];
  }

  return (
    <div className="carBooking">
      <h2>{car.model}</h2>
      <div className="carBooking-main">
        <div className={`car-img ${car.alt}`}></div>
        <div className="car-content">
          <div className="details">
            <ul class="car-details">
              <li>Speed: {car.speed}</li>
              <li>Acceleration: {car.acceleration}</li>
              <li>Height: {car.height}</li>
              <li>Width: {car.width}</li>
              <li>Length: {car.length}</li>
            </ul>
            <label htmlFor="date">Pick a date</label>
            <div className="pick-date">
              <input
                type="date"
                name="date"
                id="date"
                onClick={handleDatePicking}
              />
            </div>
            <div className="pick-city">
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
            </div>
            <button
              className="book-drive-button"
              onClick={() => {
                scrollToTop();
                handleBooking();
              }}
            >
              Book a drive
            </button>
          </div>
        </div>
      </div>
      {carsState.creating_booking ? (
        <div className="creating-booking">
          <h2 className="creating-booking-title">Creating Your Booking...</h2>
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
      <div className="back-to-cars-link-div">
        <Link to="/" className="back-to-cars-link">
          {'<< '} Back to cars
        </Link>
      </div>
    </div>
  );
}
const mapDispatchToProps = (dispatch) => ({
  postBooking: (book) => {
    dispatch(createBooking(book));
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
