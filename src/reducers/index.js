import { combineReducers } from 'redux';
import { carsReducer } from './carReducer';
import userReducer from './userReducer';

const combinedReducers = combineReducers({
  carsReducer,
  userReducer,
});

export default combinedReducers;
