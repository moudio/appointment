import React from 'react';
import './Login.css';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Alert from './Alert/Alert';
import { handleLogin } from '../../actions/actions';

function Login({ handleLogin, userInfos }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    const user = {
      username: document.querySelector("input[type='text']").value,
      password: document.querySelector("input[type='password']").value,
    };
    handleLogin(user);
  };

  console.log('USERINFONS', userInfos);

  const handleErrors = (errors) => {};

  return (
    <>
      <div className="login-div">
        <div className="sidebar">
          <h1>Login to your account </h1>
        </div>
        <div className="form-container">
          <form onSubmit={handleSubmit}>
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
