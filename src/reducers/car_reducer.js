const defaultState = {
  cars: ['hello'],
  isFetching: false,
};

const carsReducer = (state = defaultState, action) => {
  switch (action.type) {
    case 'Hello':
      return state;
    default:
      return state;
  }
};

export default carsReducer;
