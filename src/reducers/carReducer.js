import * as ACTION_TYPE from '../actions/actions';

export const defaultCarState = {
  cars: [],
  isFetching: false,
};

export const carsReducer = (state = defaultCarState, action) => {
  switch (action.type) {
    case ACTION_TYPE.IS_FETCHING:
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
        redirect: true,
      };

    case ACTION_TYPE.CREATING_BOOKING:
      return {
        ...state,
        creating_booking: true,
      };

    case ACTION_TYPE.BOOKING_CREATED:
      return {
        ...state,
        booking_created: true,
      };

    case ACTION_TYPE.BOOKING_FALSE:
      return {
        ...state,
        booking_created: false,
      };
    case ACTION_TYPE.BOOKING_CREATION_FAIL:
      return {
        ...state,
        message: 'You cannot create the same booking for that car',
        booking_creation_fail: true,
      };
    case ACTION_TYPE.REDIRECT_FALSE:
      return {
        ...state,
        redirect: false,
      };
    default:
      return state;
  }
};
