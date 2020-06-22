import React from 'react';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';
import './CarBooking.css';

import { createBooking } from '../../actions/actions';
function CarBooking({ car, postBooking, user, carsState }) {
  const history = useHistory();
  if (carsState.booking_created) {
    history.push('/user');
  }
  function handleBooking() {
    const book = {
      booking_date: document.querySelector('#date').value,
      car_id: car.id,
      user_id: user.id,
    };
    console.log('book object');
    console.log(book);
    postBooking(book);
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
          <select name="cities" id="cities">
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
    </div>
  );
}
const mapDispatchToProps = (dispatch) => ({
  postBooking: (book) => {
    dispatch(createBooking(book));
  },
});
const mapStateToProps = (state) => ({
  carsState: state.carsReducer,
  user: state.userReducer.user,
});

export default connect(mapStateToProps, mapDispatchToProps)(CarBooking);
