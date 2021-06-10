import { combineReducers } from 'redux';
import offerReducer from './offer/offer.reducer';

export default combineReducers({
  offer: offerReducer,
});
