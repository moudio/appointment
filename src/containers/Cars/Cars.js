import React, { Component, useEffect } from 'react';

import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import ReactFullpage from '@fullpage/react-fullpage';
import { Header, Footer, SectionsContainer, Section } from 'react-fullpage';
import { useHistory } from 'react-router-dom';
import './Cars.css';
import Car from '../../components/Car/Car';
import Loading from '../../Images/loading.gif';
import { fetchCars } from '../../actions/actions';

function Cars({ cars, carsState, getAllCars }) {
  useEffect(() => {
    getAllCars();
  }, []);

  const history = useHistory();
  if (carsState.carToShow) {
    history.push(`/cars/range-rover-${carsState.carToShow.alt}`);
  }

  return (
    <>
      {cars && cars.length > 0 && !carsState.isFetching ? (
        <ReactFullpage
          scrollOverflow
          sectionsColor={['#4BBFC3', '#7BAABE', 'whitesmoke', '#81e4da']}
          continuousVertical
          navigation
          render={({ state, fullpageApi }) => (
            <div id="fullpage-wrapper">
              {cars.map((car) => (
                <Car car={car} />
              ))}
            </div>
          )}
        />
      ) : (
        <div className="loading-div">
          <img src={Loading} alt="Loading" className="loading-cars" />
        </div>
      )}
    </>
  );
}

const mapStateToProps = (state) => ({
  carsState: state.carsReducer,
});

const mapDispatchToProps = (dispatch) => ({
  getAllCars: () => {
    dispatch(fetchCars());
  },
});
export default connect(mapStateToProps, mapDispatchToProps)(Cars);
