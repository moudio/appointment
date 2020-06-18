import React from 'react';
import './Register.css';
import Background from '../../Images/range_background.jpg';
function Register() {
  return (
    <div>
      <div className="container">
        <div className="row ">
          <div className="col-md-4 py-5 bg-primary text-white text-center ">
            <div className=" ">
              <div className="card-body">
                <h2 className="py-3">Registration</h2>
                <p>Create Your Account</p>
              </div>
            </div>
          </div>
          <div className="col-md-8 py-5 border">
            <h4 className="pb-4">Please fill with your details</h4>
            <form>
              <div className="form-row">
                <div className="form-group col-md-12">
                  <input
                    id="Username"
                    name="Username"
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
                    className="form-control"
                    id="inputpassword"
                    placeholder="Password Confirmation"
                  />
                </div>
              </div>

              <div className="form-row">
                <button type="button" className="btn btn-danger">
                  Create Account
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
