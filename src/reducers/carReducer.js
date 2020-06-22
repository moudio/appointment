import * as ACTION_TYPE from '../actions/actions';

export const defaultCarState = {
  cars: [],
  isFetching: false,
};

export const carsReducer = (state = defaultCarState, action) => {
  console.log('car reducer called');
  switch (action.type) {
    case ACTION_TYPE.IS_FETCHING:
      console.log('CAR IS FETCHING');
      return {
        ...state,
        isFetching: true,
      };
    case ACTION_TYPE.FETCH_SUCCESS:
      return {
        ...state,
        cars: action.cars,
        isFetching: false,
        isChecking: false,
      };
    case ACTION_TYPE.FETCH_FAILURE:
      return {
        ...state,
        cars: null,
        isFetching: action.isFetching,
      };
    case ACTION_TYPE.ONE_CAR_FETCH_SUCCESS:
      return {
        ...state,
        isFetching: false,
        carToShow: action.carToShow,
      };

    case ACTION_TYPE.BOOKING_CREATED:
      return {
        ...state,
        booking_created: true,
      };

    default:
      return state;
  }
};
