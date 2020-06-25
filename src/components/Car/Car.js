import React from 'react';
import './Car.css';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { getOneCar, redirectFalse } from '../../actions/actions';

function Car({
  car, getCar, carsState, history, makeRedirectFalse,
}) {
  function manageOneCarFetch(carId) {
    getCar(carId);
  }
  if (carsState.carToShow && carsState.redirect) {
    makeRedirectFalse();
    history.push(`/cars/range-rover-${carsState.carToShow.alt}`);
  }

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
            onClick={() => manageOneCarFetch(car.id)}
          >
            Book a ride
          </button>
        </div>
      </div>
    </div>
  );
}
const mapStateToProps = (state) => ({
  carsState: state.carsReducer,
});

const mapDispatchToProps = (dispatch) => ({
  getCar: (carId) => dispatch(getOneCar(carId)),
  makeRedirectFalse: () => dispatch(redirectFalse()),
});

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Car));
