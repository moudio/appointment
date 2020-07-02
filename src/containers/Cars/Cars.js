import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import ReactFullpage from '@fullpage/react-fullpage';
import './Cars.css';
import Car from '../../components/Car/Car';
import Loading from '../../Images/loading_white.gif';
import { fetchCars } from '../../actions/actions';

function Cars({ carsState, cars, getAllCars }) {
  useEffect(() => {
    getAllCars();
  }, []);

  return (
    <>
      {cars && cars.length > 0 && !carsState.isFetching ? (
        <ReactFullpage
          scrollOverflow
          sectionsColor={['#4BBFC3', '#7BAABE', 'whitesmoke', '#81e4da']}
          continuousVertical
          navigation
          render={() => (
            <div id="fullpage-wrapper">
              {cars.map(car => (
                <Car key={car.alt} car={car} />
              ))}
            </div>
          )}
        />
      ) : (
        <div className="loading-div">
          <img src={Loading} alt="Loading" className="loading-cars" />
        </div>
      )}
    </>
  );
}

const mapStateToProps = state => ({
  carsState: state.carsReducer,
});

const mapDispatchToProps = dispatch => ({
  getAllCars: () => {
    dispatch(fetchCars());
  },
});

Cars.propTypes = {
  carsState: PropTypes.shape({
    isFetching: PropTypes.bool,
  }).isRequired,
  cars: PropTypes.instanceOf(Array).isRequired,
  getAllCars: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Cars);
