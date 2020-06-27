import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { endLoadingBeforeWelcomePage } from '../../actions/actions';
import loadingBars from '../../Images/bars_welcome.gif';
import './Welcome.css';
function Welcome({ userStatus, endLoadingWelcome }) {
  if (userStatus.loadingBeforeWelcome) {
    endLoadingWelcome();
  }
  return (
    <div className="Welcome">
      {userStatus.loadingBeforeWelcome ? (
        <div className="loading-welcome">
          <img src={loadingBars} alt="bars" className="loading-bars" />
        </div>
      ) : (
        <div className="welcome-inner">
          <div className="jumbotron">
            <h1 className="display-4">The Cars You Have Always Wanted</h1>
            <p className="lead description">
              {' '}
              Discover Our Unique Car Selection And Book For A Drive Right Away!
            </p>
            <hr className="my-4" />
            <p className="lead">
              <Link class="btn btn-black" to="/cars" role="button">
                Learn More{' >> '}
              </Link>
            </p>
          </div>
        </div>
      )}
    </div>
  );
}

Welcome.propTypes = {};

const mapStateToProps = (state) => ({
  userStatus: state.userReducer,
});

const mapDispatchToProps = (dispatch) => ({
  endLoadingWelcome: () => {
    dispatch(endLoadingBeforeWelcomePage());
  },
});
export default connect(mapStateToProps, mapDispatchToProps)(Welcome);
