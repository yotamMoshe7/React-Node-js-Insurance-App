import axios from 'axios';
import { takeLatest, put } from 'redux-saga/effects';
import { OfferActionsType } from './offer.types';
import { OFFER_URL } from '../../utility/constants/Constants';
import { fetchOfferSuccess, fetchOfferFailure } from './offer.actions';
import {
  saveUserDetailsToLocalStorage,
  saveOfferDetailsToLocalStorage,
} from './offer.utills';

export function* fetchOfferAssync(actionObject) {
  const offerRequestObject = actionObject.payload;
  try {
    const serverResult = yield axios.post(OFFER_URL, {
      zipCode: offerRequestObject.zipCode,
      gender: offerRequestObject.gender,
      birthdate: offerRequestObject.birthdate,
      income: offerRequestObject.income,
    });

    yield put(fetchOfferSuccess(serverResult.data.data));

    // Save user details in local storage
    saveUserDetailsToLocalStorage(offerRequestObject);

    // Save offer details in local storage
    saveOfferDetailsToLocalStorage(serverResult.data.data);
  } catch (error) {
    if (error.response !== null && error.response !== undefined) {
      console.log(error.response);
      yield put(fetchOfferFailure(error.response.data.errors));
    } else {
      yield put(fetchOfferFailure(['Server error']));
    }
  }
}

export function* onFetchOfferStart() {
  yield takeLatest(OfferActionsType.FETCH_OFFER_START, fetchOfferAssync);
}
