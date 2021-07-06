import { combineReducers } from 'redux';
import flipReducer from './flipcard';
import flipgetReducer from './flipcardget';
export const rootReducer = combineReducers({
  flipReducer: flipReducer,
  flipgetReducer: flipgetReducer,
});
