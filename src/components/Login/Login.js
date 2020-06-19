import React from 'react';
import './Login.css';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Alert from './Alert/Alert';
import Errors from '../Errors/Errors';
import { handleLogin } from '../../actions/actions';
import loading from '../../Images/loading.gif';

function Login(props) {
  const handleSubmit = (e) => {
    e.preventDefault();
    const user = {
      username: document.querySelector("input[type='text']").value,
      password: document.querySelector("input[type='password']").value,
    };
    props.handleLogin(user);
  };

  if (props.userInfos.isLoggedIn) {
    props.history.push('/user');
  }
  return (
    <>
      <div className="login-div">
        <div className="sidebar">
          <h1>Login to your account </h1>
        </div>
        <div className="form-container">
          <form onSubmit={handleSubmit}>
            {props.userInfos.loginErrors ? (
              <Errors errors={props.userInfos.loginErrors} />
            ) : null}
            {props.userInfos.isChecking ? (
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

const mapStateToProps = (state) => ({
  userInfos: state.userReducer,
});
const mapDispatchToProps = (dispatch) => ({
  handleLogin: (user) => {
    dispatch(handleLogin(user));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
