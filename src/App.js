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

function App({ cars, userStatus }) {
  console.log('userStatus from App', userStatus);
  useEffect(() => {
    console.log('useEffect');
    if (userStatus.isLoggedIn) {
      console.log('true');
      getCars();
    }
  }, []);
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
          <Route path="/signup" exact>
            <Signup />
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
