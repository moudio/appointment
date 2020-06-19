import React, { useEffect } from 'react';
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

function App({ cars, userStatus }) {
  console.log('userStatus from App', userStatus);

  return (
    <Router>
      <div className="App" data-testid="App">
        <Navigation />
        <Switch>
          <Route path="/" exact>
            {userStatus.isLoggedIn ? (
              <Cars cars={cars.cars} />
            ) : (
              <Redirect
                push
                to={{ pathname: '/login', state: { alert: 'hello' } }}
              />
            )}
          </Route>
          <Route
            path="/login"
            render={(props) => <Login {...props} />}
            exact
          ></Route>
          <Route
            path="/signup"
            exact
            render={(props) => <Signup {...props} />}
          ></Route>

          <Route exact path="/user">
            {userStatus.isLoggedIn ? (
              <User user={userStatus.user} />
            ) : (
              <Redirect
                push
                to={{ pathname: '/login', state: { alert: 'hello' } }}
              />
            )}
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

const mapStateToProps = (state) => ({
  cars: state.carsReducer,
  userStatus: state.userReducer,
});

const mapDispatchToProps = (dispatch) => ({
  checkLoginStatus: () => dispatch(loginStatus()),
});
export default connect(mapStateToProps, mapDispatchToProps)(App);
