import { React, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import Cars from './containers/Cars';
import { connect } from 'react-redux';
function App() {
  useEffect(() => {
    getCars();
  });

  function getCars() {
    axios.get('/api/v1/cars').then((response) => console.log(response.data));
  }

  return (
    <div className="App">
      <Cars />
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    cars: state.cars,
  };
};

const mapDispatchToProps = (dipsatch) => {};
export default connect(mapStateToProps, mapDispatchToProps)(App);
