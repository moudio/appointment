import React, { useEffect } from 'react';
import axios from 'axios';
import './App.css';
import Cars from './containers/Cars';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { fetchCars } from './actions/actions';
import loadingGif from './Images/loading.gif';

function App({ cars, getCars }) {
  useEffect(() => {
    // if (cars['cars'] && cars['cars'].length >= 0) {
    //   getCars();
    // }
  });

  return (
    <div className="App" data-testid="App">
      {cars.isFetching ? (
        <>
          <h1>Fetching</h1> <img src={loadingGif} alt="loading" />{' '}
        </>
      ) : (
        <h1>Not fetching</h1>
      )}
      {console.log('state ', cars)}
      <button onClick={() => getCars()}>Click to fetch</button>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    cars: state,
  };
};

const mapDispatchToProps = (dispatch) => ({
  getCars: () => dispatch(fetchCars()),
});
export default connect(mapStateToProps, mapDispatchToProps)(App);
