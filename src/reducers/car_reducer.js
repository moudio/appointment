import * as ACTION_TYPE from '../actions/actions';

export const defaultState = {
  cars: [
    {
      id: 1,
      model: 'Range Rover Velar',
      description:
        'The most refined and capable SUV. Discover its stunning capabilities and design in detail.',
      alt: 'velar',
      created_at: '2020-06-14T14:21:24.820Z',
      updated_at: '2020-06-14T14:21:24.820Z',
    },
    {
      id: 2,
      model: 'Range Rover Evoque',
      description:
        'Introducing the new Range Rover Evoque Hybrid. A small and premium SUV for a stylish look.',
      alt: 'evoque',
      created_at: '2020-06-14T14:21:24.829Z',
      updated_at: '2020-06-14T14:21:24.829Z',
    },
    {
      id: 3,
      model: 'Range Rover Sport',
      description:
        'Explore the powerful Range Rover Sport. The ultimate luxury SUV.',
      alt: 'sport',
      created_at: '2020-06-14T14:21:24.846Z',
      updated_at: '2020-06-14T14:21:24.846Z',
    },
    {
      id: 4,
      model: 'Discovery',
      description:
        'The off road SUV that truly stand out. Discover our most versatile SUV on the market',
      alt: 'discovery',
      created_at: '2020-06-14T14:21:24.875Z',
      updated_at: '2020-06-14T14:21:24.875Z',
    },
  ],
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
      console.log('default', action);
      return state;
  }
};
