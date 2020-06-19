import { combineReducers } from 'redux';
import { carsReducer } from './carReducer';
import userReducer from './userReducer';

export default combineReducers({
  carsReducer,
  userReducer,
});
