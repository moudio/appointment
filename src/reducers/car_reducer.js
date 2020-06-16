const defaultState = {
  cars: ['hello'],
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
