import React from 'react';
import './Login.css';
import Alert from './Alert/Alert';
import { Link } from 'react-router-dom';
import axios from 'axios';
class Login extends React.Component {
  handleSubmit(e) {
    e.preventDefault();
  }
  render() {
    return (
      <>
        <div className="login-div">
          <div className="sidebar">
            <h1>Login to your account </h1>
          </div>
          <div className="form-container">
            <form onSubmit={this.handleSubmit}>
              {this.props.alert ? <Alert /> : null}
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
              <Link to="/signup">Create Account</Link>
            </form>
          </div>
        </div>
      </>
    );
  }
}

export default Login;
