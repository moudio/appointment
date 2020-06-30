import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import './Signup.css';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { signupUser } from '../../actions/actions';
import Errors from '../Errors/Errors';
import loading from '../../Images/loading.gif';

function Signup({ dispatchSignup, signupStatus, history }) {
  useEffect(() => {
    if (document.querySelector('.menu-icon')) {
      document.querySelector('.menu-icon').classList.add('menu-white');
    }
    if (signupStatus.status === 'created') {
      history.push('/user');
    }
  });
  function handleSignup(e) {
    e.preventDefault();
    const user = {
      username: document.querySelector('#username').value,
      password: document.querySelector('#password').value,
      password_confirmation: document.querySelector('#passwordConfirmation')
        .value,
    };
    dispatchSignup(user);
  }

  return (
    <div className="register">
      <div className="container registration-container">
        <div className="row ">
          <div className="col-md-4 py-5 registration-sidebar text-white text-center ">
            <div className=" ">
              <div className="card-body">
                <h2 className="py-3">Registration</h2>
                <p>Create Your Account</p>
              </div>
            </div>
          </div>
          <div className="col-md-8 py-5 border">
            <h4 className="pb-4">Please fill with your details</h4>
            <form onSubmit={handleSignup}>
              {signupStatus.status === 500 ? (
                <Errors errors={signupStatus.signupErrors} />
              ) : null}
              {signupStatus.isChecking ? (
                <img src={loading} alt="loading" className="loading-gif" />
              ) : null}
              <div className="form-row">
                <div className="form-group col-md-12">
                  <input
                    id="username"
                    name="username"
                    placeholder="Username"
                    className="form-control"
                    type="text"
                    required
                  />
                </div>
              </div>
              <div className="form-row">
                <div className="form-group col-md-12">
                  <input
                    type="password"
                    name="password"
                    className="form-control"
                    id="password"
                    placeholder="Password"
                    required
                  />
                </div>
              </div>
              <div className="form-row">
                <div className="form-group col-md-12">
                  <input
                    type="password"
                    name="password_confirmation"
                    className="form-control"
                    id="passwordConfirmation"
                    placeholder="Password Confirmation"
                    required
                  />
                </div>
              </div>

              <div className="form-row">
                <button type="submit" className="btn btn-black">
                  Create Account
                </button>
                or
                <Link to="/login">Login</Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

Signup.propTypes = {
  signupStatus: PropTypes.shape({
    status: PropTypes.string,
    signupErrors: PropTypes.instanceOf(Array),
    isChecking: PropTypes.bool,
  }).isRequired,
  history: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,
  dispatchSignup: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  signupStatus: state.userReducer,
});

const mapDispatchToProps = (dispatch) => ({
  dispatchSignup: (user) => {
    dispatch(signupUser(user));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Signup);
