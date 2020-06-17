import React, { useEffect } from 'react';
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
    <Router>
      <div className="App" data-testid="App">
        <Switch>
          <Route path="/">
            <Cars />
          </Route>
        </Switch>
      </div>
    </Router>
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
