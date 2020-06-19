import React, { Component, useEffect } from 'react';

import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import ReactFullpage from '@fullpage/react-fullpage';
import { Header, Footer, SectionsContainer, Section } from 'react-fullpage';
import './Cars.css';
import Car from '../../components/Car/Car';
import Loading from '../../Images/loading.gif';
import { fetchCars } from '../../actions/actions';

function Cars(props) {
  useEffect(() => {
    console.log('component did mount for cars');
    props.getAllCars();
  }, []);

  console.log('inside cars');
  return (
    <>
      {props.cars && props.cars.length > 0 ? (
        <ReactFullpage
          scrollOverflow={true}
          sectionsColor={['#4BBFC3', '#7BAABE', 'whitesmoke', '#81e4da']}
          continuousVertical={true}
          navigation
          render={({ state, fullpageApi }) => {
            return (
              <div id="fullpage-wrapper">
                {props.cars.map((car) => {
                  return <Car car={car} />;
                })}
              </div>
            );
          }}
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
