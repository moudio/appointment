import * as ACTION_TYPE from '../actions/actions';

export const defaultState = {
  cars: [],
  isFetching: false,
};

export const carsReducer = (state = defaultState, action) => {
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
      };
    case ACTION_TYPE.FETCH_FAILURE:
      return {
        ...state,
        cars: null,
        isFetching: action.isFetching,
      };

    default:
      return state;
  }
};
