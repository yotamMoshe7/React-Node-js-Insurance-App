import { all, call } from 'redux-saga/effects';
import { onFetchOfferStart } from './offer/offer.sagas';

export default function* rootSaga() {
  yield all([call(onFetchOfferStart)]);
}
