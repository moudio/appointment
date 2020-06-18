import { combineReducers } from 'redux';
import { carsReducer } from './carsReducer';
import { usersReducer } from './usersReducer';

export default combineReducers({
  carsReducer,
  usersReducer,
});
