// @flow
import React from 'react';
import PropTypes from 'prop-types';
import './Car.css';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { getOneCar, redirectFalse } from '../../actions/actions';

function Car({ car, getCar, carsState, history, makeRedirectFalse }) {
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
          <p className="car-description">{car.description}</p>
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

Car.propTypes = {
  car: PropTypes.instanceOf(Object).isRequired,
  carsState: PropTypes.shape({
    cars: PropTypes.instanceOf(Array),
    isFetching: PropTypes.bool,
    carToShow: PropTypes.instanceOf(Object),
    redirect: PropTypes.bool,
  }).isRequired,
  getCar: PropTypes.func.isRequired,
  history: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,
  makeRedirectFalse: PropTypes.func.isRequired,
};
const mapStateToProps = (state) => ({
  carsState: state.carsReducer,
  token: state.token,
});

const mapDispatchToProps = (dispatch) => ({
  getCar: (carId) => dispatch(getOneCar(carId)),
  makeRedirectFalse: () => dispatch(redirectFalse()),
});

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Car));
