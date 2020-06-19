import React from 'react';
import './Login.css';
import { Link } from 'react-router-dom';

import axios from 'axios';
import { connect } from 'react-redux';
import Alert from './Alert/Alert';
import {} from '../../actions/actions';
class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      errors: '',
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  }
  handleSubmit(e) {
    e.preventDefault();
    console.log(this.state);
    const { username, password } = this.state;
    let user = {
      username: username,
      password: password,
    };
    axios
      .post('http://localhost:3001/login', { user }, { withCredentials: true })
      .then((response) => {
        if (this.response.data.logged_in === true) {
          handleLogin();
        } else {
          handleLogout();
        }
      })
      .catch((error) => console.log('api errors', error));
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
                  name="username"
                  className="form-control"
                  placeholder="User Name"
                  onChange={this.handleChange}
                />
              </div>
              <div className="form-group">
                <label>Password</label>
                <input
                  type="password"
                  name="password"
                  className="form-control"
                  placeholder="Password"
                  onChange={this.handleChange}
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

const mapStateToProps = (state) => {};

const mapDispatchToProps = (dispatch) => {
  return {
    login: () => {
      dispatch(login());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
