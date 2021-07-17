import { combineReducers } from 'redux';
import flipReducer from './flipcard';
import flipgetReducer from './flipcardget';
import pricingReducer from './pricingcard';
import pricinggetReducer from './pricingcardget';
import normalReducer from './normalcard';
import normalgetReducer from './normalcardget';
import normalallReducer from './normalcardall';
import pricingallReducer from './pricingcardall';
import flipallReducer from './flipcardall';
import flipdeleteReducer from './carddelete';
import updateReducer from './updateReducer';
export const rootReducer = combineReducers({
  flipReducer: flipReducer,
  flipgetReducer: flipgetReducer,
  pricingReducer: pricingReducer,
  pricinggetReducer: pricinggetReducer,
  normalReducer: normalReducer,
  normalgetReducer: normalgetReducer,
  flipallReducer: flipallReducer,
  pricingallReducer: pricingallReducer,
  normalallReducer: normalallReducer,
  flipdeleteReducer: flipdeleteReducer,
  updateReducer: updateReducer,
});
