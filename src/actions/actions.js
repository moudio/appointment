import axios from 'axios';

export const FETCH_SUCCESS = 'FETCH_SUCCESS';

export const fetchCars = (car) => (dipsatch) => {
  axios
    .get('http://localhost:3001/cars')
    .then((cars) => {
      dipsatch({
        type: FETCH_SUCCESS,
        cars: cars.data,
        loading: false,
      });
    })
    .catch((error) => console.log(error));
};
