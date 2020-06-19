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
function App({ cars, getCars, userStatus, checkLoginStatus }) {
  useEffect(() => {
    if (userStatus.isLoggedIn) {
      getCars();
    } else {
      console.log('no');
      console.log(userStatus);
    }
  }, []);
  return (
    <Router>
      <div className="App" data-testid="App">
        <Navigation />
        <Switch>
          <Route path="/" exact>
            {userStatus.isLoggedIn ? (
              <Cars cars={cars['cars']} />
            ) : (
              <Login alert={true} />
            )}
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
  checkLoginStatus: () => dispatch(loginStatus()),
});
export default connect(mapStateToProps, mapDispatchToProps)(App);
