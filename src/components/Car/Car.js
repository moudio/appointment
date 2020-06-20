import React from 'react';
import './Car.css';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { getOneCar } from '../../actions/actions';
function Car({ car }) {
  return (
    <div className="section">
      <div className="inner-section">
        <div className={`picture section-${car.alt}`} />
        <div className="content">
          <h2>{car.model}</h2>
          <p>{car.description}</p>
          <button type="button" className="book-ride" onClick={getOneCar}>
            Book a ride
          </button>
        </div>
      </div>
    </div>
  );
}
const mapStateToProps = (state) => ({
  carsReducer: state.carsReducer,
});

const mapDispatchToProps = (dispatch) => ({
  getCar: () => {
    dispatch(getOneCar);
  },
});
export default connect(mapStateToProps, mapDispatchToProps)(Car);
