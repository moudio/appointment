import axios from 'axios';

export const FETCH_SUCCESS = 'FETCH_SUCCESS';
export const FETCH_FAILURE = 'FETCH_FAILURE';
export const IS_FETCHING = 'IS_FETCHING';

export const fetchCars = () => (dispatch) => {
  dispatch({
    type: IS_FETCHING,
    loading: true,
  });

  axios
    .get('http://localhost:3001/api/v1/cars')
    .then((cars) => {
      dispatch({
        type: FETCH_SUCCESS,
        cars: cars.data,
      });
    })
    .catch((error) => {
      console.log("Can't access the api");
      dispatch({
        type: FETCH_FAILURE,
      });
    });
};
