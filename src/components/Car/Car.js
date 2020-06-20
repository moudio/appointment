import React from 'react';
import './Car.css';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { getOneCar } from '../../actions/actions';
function Car({ car, getCar }) {
  return (
    <div className="section">
      <div className="inner-section">
        <div className={`picture section-${car.alt}`} />
        <div className="content">
          <h2>{car.model}</h2>
          <p>{car.description}</p>
          <button
            type="button"
            className="book-ride"
            onClick={() => getCar(car.id)}
          >
            Book a ride
          </button>
        </div>
      </div>
    </div>
  );
}
// const mapStateToProps = (state) => ({
//   carsReducer: state.carsReducer,
// });

const mapDispatchToProps = (dispatch) => ({
  getCar: (carId) => dispatch(getOneCar(carId)),
});

export default connect(null, mapDispatchToProps)(Car);
