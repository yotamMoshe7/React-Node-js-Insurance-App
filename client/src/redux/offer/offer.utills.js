import {
  LOCAL_STORAGE_USER_DETAILS,
  LOCAL_STORAGE_OFFER_DETAILS,
} from '../../utility/constants/Constants';

export const saveUserDetailsToLocalStorage = (userDetails) => {
  localStorage.setItem(
    LOCAL_STORAGE_USER_DETAILS,
    JSON.stringify({
      zipCode: userDetails.zipCode,
      gender: userDetails.gender,
      birthdate: userDetails.birthdate,
      income: userDetails.income,
    })
  );
};

export const saveOfferDetailsToLocalStorage = (offer) => {
  localStorage.setItem(LOCAL_STORAGE_OFFER_DETAILS, JSON.stringify(offer));
};
