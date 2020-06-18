import React, { useEffect } from 'react';
import './App.css';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { fetchCars } from './actions/actions';
import Cars from './containers/Cars/Cars';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import Navigation from './containers/Navigation/Navigation';
import { loginStatus } from './actions/actions';
function App({ cars, getCars, userStatus }) {
  useEffect(() => {
    async function waitLoginStatusCall() {
      await loginStatus();
      if (userStatus.isLoggedIn) {
        getCars();
      }
    }
    waitLoginStatusCall();
  }, []);
  return (
    <Router>
      <div className="App" data-testid="App">
        <Navigation />
        <Switch>
          <Route path="/" exact>
            <Cars cars={cars['cars']} />
          </Route>
          <Route path="/login" exact>
            <Login />
          </Route>
          <Route path="/register" exact>
            <Register />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

const mapStateToProps = (state) => {
  return {
    cars: state.carsReducer,
    userStatus: state.userReducer,
  };
};

const mapDispatchToProps = (dispatch) => ({
  getCars: () => dispatch(fetchCars()),
  loginStatus: () => dispatch(loginStatus()),
});
export default connect(mapStateToProps, mapDispatchToProps)(App);
