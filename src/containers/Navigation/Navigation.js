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
    this.state.menu === 'breadcrumb'
      ? this.setState({
        menu: 'close',
      })
      : this.setState({
        menu: 'breadcrumb',
      });
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
    return (
      <>
        <nav className="Navigation">
          <div className="menu-icon">
            {this.state.menu === 'breadcrumb' ? (
              <AiOutlineMenu
                className="breadcrumb"
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
              <Link to="/">Cars</Link>
            </li>
            {this.props.logged_in ? null : (
              <li>
                <Link to="/login">Login</Link>
              </li>
            )}
            {this.props.logged_in ? (
              <li>
                <Link to="/user">Your Account</Link>
              </li>
            ) : null}
            {this.props.logged_in ? (
              <li>
                <Link onClick={this.props.handleLogout}>Logout</Link>
              </li>
            ) : null}
          </ul>
        </nav>
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  logged_in: state.userReducer.isLoggedIn,
});

const mapDispatchToProps = (dispatch) => ({
  handleLogout: () => {
    dispatch(logout());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Navigation);
