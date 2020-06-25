import React from 'react';
import PropTypes from 'prop-types';
import './Login.css';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Errors from '../Errors/Errors';
import { handleLogin } from '../../actions/actions';
import loading from '../../Images/loading.gif';

function Login({ userInfos, handleLoginProps, history }) {
  const handleSubmit = (e) => {
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
      <div className="login-div">
        <div className="sidebar">
          <h1>Login to your account </h1>
        </div>
        <div className="form-container">
          <form onSubmit={handleSubmit}>
            {userInfos.loginErrors ? (
              <Errors errors={userInfos.loginErrors} />
            ) : null}
            {userInfos.isChecking ? (
              <img src={loading} alt="loading" className="loading-gif" />
            ) : null}
            <div className="form-group">
              <label>User Name</label>
              <input
                type="text"
                name="username"
                className="form-control"
                placeholder="User Name"
              />
            </div>
            <div className="form-group">
              <label>Password</label>
              <input
                type="password"
                name="password"
                className="form-control"
                placeholder="Password"
              />
            </div>
            <button type="submit" className="btn btn-black">
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
    isLoggedIn: PropTypes.bool.isRequired,
    isChecking: PropTypes.bool.isRequired,
  }).isRequired,
  handleLoginProps: PropTypes.func.isRequired,
  history: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,
};

const mapStateToProps = (state) => ({
  userInfos: state.userReducer,
});
const mapDispatchToProps = (dispatch) => ({
  handleLoginProps: (user) => {
    dispatch(handleLogin(user));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
