import { LOCAL_STORAGE_OFFER_DETAILS } from '../../utility/constants/Constants';
import { OfferActionsType } from './offer.types';

const INITIAL_STATE = {
  currentOffer:
    JSON.parse(localStorage.getItem(LOCAL_STORAGE_OFFER_DETAILS)) || null,
  errorMessage: undefined,
  offerRequest: undefined,
};

const offerReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case OfferActionsType.FETCH_OFFER_START:
      return {
        ...state,
        offerRequest: action.payload,
      };

    case OfferActionsType.FETCH_OFFER_SUCCESS:
      return {
        ...state,
        currentOffer: action.payload,
        errorMessage: [],
      };

    case OfferActionsType.FETCH_OFFER_FAILURE:
      return {
        ...state,
        errorMessage: action.payload,
      };

    case OfferActionsType.OFFER_INITIAL_ERRORS_STATE:
      return {
        ...state,
        errorMessage: undefined,
      };

    default:
      return state;
  }
};

export default offerReducer;
