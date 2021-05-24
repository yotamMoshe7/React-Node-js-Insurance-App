import React from 'react';
import './Tab.css';
import { useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useHistory } from 'react-router';
import {
  FORM_PAGE_ROUTE,
  OFFER_PAGE_ROUTE,
} from '../../utility/constants/Constants';

export const Tab = () => {
  const history = useHistory();
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down('md'));

  const formButtonClick = () => {
    history.push({
      pathname: FORM_PAGE_ROUTE,
    });
  };

  const offerButtonClick = () => {
    history.push({
      pathname: OFFER_PAGE_ROUTE,
    });
  };

  return (
    <div className={matches ? 'mobile-tab' : 'tab'}>
      <button
        onClick={formButtonClick}
        className={matches ? 'mobile-form-button' : 'form-button'}
      >
        Form
      </button>
      <button
        onClick={offerButtonClick}
        className={matches ? 'mobile-offer-button' : 'offer-button'}
      >
        Offer
      </button>
    </div>
  );
};
