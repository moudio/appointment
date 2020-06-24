import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
function UpdateBooking({ book_to_update, car_to_update }) {
  function handleDatePicking() {
    const datePicker = document.querySelector('#date');
    datePicker.min = new Date().toISOString().split('T')[0];
  }

  function handleBookPut() {
    console.log('hello');
  }

  return (
    <div className="carBooking">
      <div className={`car-img ${car_to_update.alt}`}></div>
      <div className="car-content">
        <h2>{car_to_update.model}</h2>
        <div className="details">
          <ul class="car-details">
            <li>Speed: {car_to_update.speed}</li>
            <li>Acceleration: {car_to_update.acceleration}</li>
            <li>Height: {car_to_update.height}</li>
            <li>Width: {car_to_update.width}</li>
            <li>Length: {car_to_update.length}</li>
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
              handleBookPut();
            }}
          >
            Update Booking
          </button>
        </div>
      </div>
      {/* {carsState.creating_booking ? (
        <div className="creating-booking">
          <h2>Creating Your Booking...</h2>
          <div className="animation-picture">
            <img src={Loading} alt="Creating your booking" />
          </div>
        </div>
      ) : null} */}
      {/* {carsState.booking_fail_message ? (
        <div className="booking-fail-message">
          <p>{carsState.booking_fail_message}</p>
          <button class="btn btn-success" onClick={() => redirectToDashboard()}>
            Go To Your Dashboard
          </button>
          <button class="btn btn-info" onClick={() => redirectToCars()}>
            Book Other Cars
          </button>
        </div>
      ) : null} */}
      <div className="back-to-cars-link-div">
        <Link to="/" className="back-to-cars-link">
          Back to cars
        </Link>
      </div>
    </div>
  );
}
const mapStateToProps = (state) => ({
  book_to_update: state.userReducer.book_to_update,
  car_to_update: state.userReducer.car_to_update,
});

const mapDispatchToProps = (dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(UpdateBooking);
