import React from 'react';
import './App.css';
import { connect } from 'react-redux';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import { loginStatus } from './actions/actions';
import Cars from './containers/Cars/Cars';
import Login from './components/Login/Login';
import Signup from './components/Signup/Signup';
import Navigation from './containers/Navigation/Navigation';
import User from './components/User/User';
import CarBooking from './components/CarBooking/CarBooking';

function App({ carsState, userStatus, history }) {
  return (
    <Router>
      <div className="App" data-testid="App">
        <Navigation />
        <Switch>
          {userStatus.isLoggedIn ? (
            <Route
              exact
              path="/"
              render={(props) => <Cars cars={carsState.cars} {...props} />}
            />
          ) : (
            <Route
              exact
              path="/login"
              render={(props) => <Login {...props} />}
            />
          )}
          <Route exact path="/login" render={(props) => <Login {...props} />} />
          <Route
            exact
            path="/signup"
            render={(props) => <Signup {...props} />}
          />

          <Route exact path="/user">
            {userStatus.isLoggedIn ? (
              <User userStatus={userStatus} />
            ) : (
              <Redirect push to={{ pathname: '/login' }} />
            )}
          </Route>
          {userStatus.isLoggedIn ? (
            <Route
              exact
              path="/cars/:car"
              render={(props) => (
                <CarBooking {...props} car={carsState.carToShow} />
              )}
            ></Route>
          ) : (
            <Redirect push to={{ pathname: '/login' }} />
          )}
        </Switch>
      </div>
    </Router>
  );
}

const mapStateToProps = (state) => ({
  carsState: state.carsReducer,
  userStatus: state.userReducer,
});

const mapDispatchToProps = (dispatch) => ({
  checkLoginStatus: () => dispatch(loginStatus()),
});
export default connect(mapStateToProps, mapDispatchToProps)(App);
