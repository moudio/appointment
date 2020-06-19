import React from 'react';
import './Signup.css';
import { Link } from 'react-router-dom';
import axios from 'axios';
function Register() {
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
            <form action="http://localhost:3001/api/v1/users" method="POST">
              <div className="form-row">
                <div className="form-group col-md-12">
                  <input
                    id="username"
                    name="user[username]"
                    placeholder="Username"
                    className="form-control"
                    type="text"
                  />
                </div>
              </div>
              <div className="form-row">
                <div className="form-group col-md-12">
                  <input
                    type="password"
                    name="user[password]"
                    className="form-control"
                    id="inputpassword"
                    placeholder="Password"
                  />
                </div>
              </div>
              <div className="form-row">
                <div className="form-group col-md-12">
                  <input
                    type="password"
                    name="user[password_confirmation]"
                    className="form-control"
                    id="inputpassword"
                    placeholder="Password Confirmation"
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

export default Register;
