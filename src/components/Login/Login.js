import React from 'react';
import './Login.css';
import Alert from './Alert/Alert';
function Login(props) {
  console.log('props', props.location);
  return (
    <>
      <div className="login-div">
        <div className="sidebar">
          <h1>Login to your account </h1>
        </div>
        <div className="form-container">
          <form>
            {props.alert ? <Alert /> : null}
            <div className="form-group">
              <label>User Name</label>
              <input
                type="text"
                className="form-control"
                placeholder="User Name"
              />
            </div>
            <div className="form-group">
              <label>Password</label>
              <input
                type="password"
                className="form-control"
                placeholder="Password"
              />
            </div>
            <button type="submit" className="btn btn-black">
              Login
            </button>
            <button type="submit" className="btn btn-secondary">
              Register
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default Login;
