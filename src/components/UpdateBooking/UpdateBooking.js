import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import { patchBookFromUpdateComponent } from '../../actions/actions';
import './UpdateBooking.css';
import Loading from '../../Images/loading_white.gif';

function UpdateBooking({ userStatus, patchBook, history }) {
  const { bookToUpdate, carToUpdate } = userStatus;
  function handleDatePicking() {
    const datePicker = document.querySelector('#date');
    [datePicker.min] = [new Date().toISOString().split('T')[0]];
  }

  function handleUpdateBook(bookId) {
    let date = document.querySelector('#date').value;
    if (!date) {
      [date] = [new Date().toISOString().split('T')[0]];
    }
    const book = {
      book_id: bookId,
      date,
      city: document.querySelector('#city').value,
    };
    patchBook(book);
  }
  function scrollToTop() {
    window.scrollTo(0, 0);
  }

  if (userStatus.should_go_to_update) {
    /* eslint-disable no-param-reassign */
    userStatus.should_go_to_update = false;
  }

  if (userStatus.redirect_after_patching) {
    history.push('/user');
  }

  return (
    <div className="carBooking">
      <h2>{carToUpdate.model}</h2>
      <div className="carBooking-main">
        <div className={`car-img ${carToUpdate.alt}`} />
        <div className="car-content">
          <div className="details">
            <ul className="car-details">
              <li>
                Speed:
                {carToUpdate.speed}
              </li>
              <li>
                Acceleration:
                {carToUpdate.acceleration}
              </li>
              <li>
                Height:
                {carToUpdate.height}
              </li>
              <li>
                Width:
                {carToUpdate.width}
              </li>
              <li>
                Length:
                {carToUpdate.length}
              </li>
            </ul>
            <label htmlFor="date">Pick a date</label>
            <div className="pick-date">
              <input
                type="date"
                name="date"
                id="date"
                onClick={handleDatePicking}
              />
            </div>
            <div className="pick-city">
              <label htmlFor="city"> Choose a city </label>
              <select name="city" id="city">
                <option value="Dakar" selected>
                  Dakar
                </option>
                <option value="Paris">Paris</option>
                <option value="New York">New York</option>
                <option value="Beijing">Beijing</option>
                <option value="Berlin">Berlin</option>
                <option value="London">London</option>
              </select>
            </div>
            <button
              className="book-drive-button"
              type="button"
              onClick={() => {
                handleUpdateBook(bookToUpdate.id);
                scrollToTop();
              }}
            >
              Update Booking
            </button>
          </div>
        </div>
      </div>
      {userStatus.is_patching_book ? (
        <div className="updating-booking">
          <h2>Updating Your Booking...</h2>
          <div className="animation-picture">
            <img src={Loading} alt="Updating your booking" />
          </div>
        </div>
      ) : null}
      {userStatus.patching_book_success ? (
        <div className="booking-update-success-message">
          Your booking has been successfully updated
        </div>
      ) : null}
      <div className="back-to-cars-link-div">
        <Link to="/cars" className="back-to-cars-link">
          Back to cars
        </Link>
      </div>
    </div>
  );
}
UpdateBooking.propTypes = {
  userStatus: PropTypes.shape({
    bookToUpdate: PropTypes.instanceOf(Object),
    carToUpdate: PropTypes.instanceOf(Object),
    should_go_to_update: PropTypes.bool,
    redirect_after_patching: PropTypes.bool,
    patching_book_success: PropTypes.bool,
    is_patching_book: PropTypes.bool,
  }).isRequired,
  history: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,
  patchBook: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  userStatus: state.userReducer,
});

const mapDispatchToProps = (dispatch) => ({
  patchBook: (book) => {
    dispatch(patchBookFromUpdateComponent(book));
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(withRouter(UpdateBooking));
