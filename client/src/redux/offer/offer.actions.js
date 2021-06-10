import { OfferActionsType } from './offer.types';

export const fetchOfferStart = (offerRequest) => ({
  type: OfferActionsType.FETCH_OFFER_START,
  payload: offerRequest,
});

export const offerInitialErrorsState = () => ({
  type: OfferActionsType.OFFER_INITIAL_ERRORS_STATE,
});

export const fetchOfferSuccess = (offer) => ({
  type: OfferActionsType.FETCH_OFFER_SUCCESS,
  payload: offer,
});

export const fetchOfferFailure = (errorMessages) => ({
  type: OfferActionsType.FETCH_OFFER_FAILURE,
  payload: errorMessages,
});
