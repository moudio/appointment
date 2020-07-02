import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import './Login.css';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Errors from '../Errors/Errors';
import { handleLogin } from '../../actions/actions';
import loading from '../../Images/loading.gif';

function Login({ userInfos, handleLoginProps, history }) {
  useEffect(() => {
    if (document.querySelector('.menu-icon')) {
      document.querySelector('.menu-icon').classList.add('menu-white');
    }
  });
  const handleSubmit = e => {
    e.preventDefault();
    const user = {
      username: document.querySelector("input[type='text']").value,
      password: document.querySelector("input[type='password']").value,
    };
    handleLoginProps(user);
  };

  if (userInfos.isLoggedIn) {
    history.push('/user');
  }
  return (
    <>
      <div className="login-div" data-testid="login-div">
        <div className="sidebar">
          <h1>Login to your account </h1>
        </div>
        <div className="form-container">
          <form onSubmit={handleSubmit}>
            {userInfos.loginErrors ? <Errors errors={userInfos.loginErrors} /> : null}
            {userInfos.isChecking ? (
              <img src={loading} alt="loading" className="loading-gif" />
            ) : null}
            <div className="form-group">
              <label htmlFor="username">User Name</label>
              <input
                type="text"
                id="username"
                name="username"
                data-testid="username-login-field"
                className="form-control"
                placeholder="User Name"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                name="password"
                id="password"
                className="form-control"
                placeholder="Password"
                autoComplete="password"
                data-testid="password-login-field"
                required
              />
            </div>
            <button type="submit" className="btn btn-black" data-testid="submit-login">
              Login
            </button>
            <Link to="/signup">Create Account</Link>
          </form>
        </div>
      </div>
    </>
  );
}

Login.propTypes = {
  userInfos: PropTypes.shape({
    loginErrors: PropTypes.instanceOf(Array),
    isLoggedIn: PropTypes.bool,
    isChecking: PropTypes.bool,
  }).isRequired,
  handleLoginProps: PropTypes.func.isRequired,
  history: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,
};

const mapStateToProps = state => ({
  userInfos: state.userReducer,
});
const mapDispatchToProps = dispatch => ({
  handleLoginProps: user => {
    dispatch(handleLogin(user));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
