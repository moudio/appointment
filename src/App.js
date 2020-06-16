import React, { useEffect } from 'react';
import axios from 'axios';
import './App.css';
import Cars from './containers/Cars';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { fetchCars } from './actions/actions';

function App({ cars, getCars }) {
  useEffect(() => {
    getCars();
  });

  return (
    <div className="App">
      {console.log(cars)}
      {cars.isFetching ? <h1>Fetching</h1> : <h1>Not fetching</h1>}
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
