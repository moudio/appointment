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

function App({ carsState, userStatus }) {
  console.log('userStatus from App', userStatus);
  console.log('carsStatus from App', carsState);

  return (
    <Router>
      <div className="App" data-testid="App">
        <Navigation />
        <Switch>
          <Route path="/" exact>
            {userStatus.isLoggedIn ? (
              <Cars cars={carsState.cars} />
            ) : (
              <Redirect
                push
                to={{ pathname: '/login', state: { alert: 'hello' } }}
              />
            )}
          </Route>
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
              <Redirect
                push
                to={{ pathname: '/login', state: { alert: 'hello' } }}
              />
            )}
          </Route>
          <Route exact path="/car">
            <h1>Your car</h1>
          </Route>
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
