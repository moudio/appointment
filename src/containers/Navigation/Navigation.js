import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { logout } from '../../actions/actions';
import './Navigation.css';

class Navigation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      menu: 'breadcrumb',
    };
  }

  toggleIcon() {
    const { menu } = this.state;
    if (menu === 'breadcrumb') {
      this.setState({
        menu: 'close',
      });
    } else {
      this.setState({
        menu: 'breadcrumb',
      });
    }
  }

  closeOnListClick() {
    const allNavLinks = Array.from(
      document.querySelectorAll('ul.menu-list li a'),
    );
    allNavLinks.forEach((navLink) => {
      navLink.addEventListener('click', () => {
        const menu = document.querySelector('.menu-list');
        if (menu.classList.contains('appear')) {
          this.toggleMenu();
          this.toggleIcon();
        }
      });
    });
  }

  toggleMenu() {
    const menu = document.querySelector('.menu-list');
    if (!menu.classList.contains('appear')) {
      document.querySelector('.Navigation').classList.add('full-width');
      menu.classList.remove('disappear');
      menu.classList.add('appear');
      this.closeOnListClick();
    } else if (menu.classList.contains('appear')) {
      menu.classList.remove('appear');
      menu.classList.add('disappear');
      document.querySelector('.Navigation').classList.remove('full-width');
    }
  }

  render() {
    const { loggedIn, handleLogout } = this.props;
    const { menu } = this.state;

    return (
      <>
        <nav className="Navigation">
          <div className="menu-icon">
            {menu === 'breadcrumb' ? (
              <AiOutlineMenu
                className="breadcrumb"
                data-testid="breadcrumb"
                onClick={() => {
                  this.toggleMenu();
                  this.toggleIcon();
                }}
              />
            ) : (
              <AiOutlineClose
                className="close-icon"
                onClick={() => {
                  this.toggleMenu();
                  this.toggleIcon();
                }}
              />
            )}
          </div>
          <ul className="menu-list disappear">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/cars" className="cars-link">
                Cars
              </Link>
            </li>
            {loggedIn ? null : (
              <li>
                <Link to="/login" data-testid="login">
                  Login
                </Link>
              </li>
            )}
            {loggedIn ? (
              <li>
                <Link to="/user">Your Account</Link>
              </li>
            ) : null}
            {loggedIn ? (
              <li>
                <Link to="/" onClick={handleLogout}>
                  Logout
                </Link>
              </li>
            ) : null}
          </ul>
        </nav>
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  loggedIn: state.userReducer.isLoggedIn,
});

const mapDispatchToProps = (dispatch) => ({
  handleLogout: () => {
    dispatch(logout());
  },
});

Navigation.propTypes = {
  loggedIn: PropTypes.bool,
  handleLogout: PropTypes.func.isRequired,
};

Navigation.defaultProps = {
  loggedIn: false,
};

export default connect(mapStateToProps, mapDispatchToProps)(Navigation);
