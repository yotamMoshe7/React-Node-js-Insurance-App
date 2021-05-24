import React, { useState, useEffect } from 'react';
import './OfferPage.css';
import Grid from '@material-ui/core/Grid';
import { useLocation } from 'react-router-dom';
import { useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import {
  PRICE_CATEGORY,
  COVERAGE_CATEGORY,
  TERM_CATEGORY,
  CARRIER_CATEGORY,
  LOCAL_STORAGE_OFFER_DETAILS,
} from '../../utility/constants/Constants';

export const OfferPage = () => {
  const location = useLocation();
  const theme = useTheme();
  const [offerDetails, setOfferDetails] = useState(
    JSON.parse(localStorage.getItem(LOCAL_STORAGE_OFFER_DETAILS)) || null
  );

  // Update state when submit button pressed
  useEffect(() => {
    if (location.state !== undefined) {
      const { price, coverage, term, carrier, carrier_logo } =
        location.state.serverResult.data;
      setOfferDetails({
        price: price,
        coverage: coverage,
        term: term,
        carrier: carrier,
        carrier_logo: carrier_logo,
      });
    }
  }, [location.state]);

  const matches = useMediaQuery(theme.breakpoints.down('md'));

  const createOfferPageElement = (category, data) => {
    return (
      <Grid container className='element-wrapper'>
        <div className='category'>{category}:</div>
        <div className='data'>{data}</div>
      </Grid>
    );
  };

  return offerDetails !== null ? (
    <div className={matches ? 'mobile-wrapper' : 'wrapper'}>
      <div className='title'>Offer Page</div>
      {createOfferPageElement(PRICE_CATEGORY, offerDetails.price)}
      {createOfferPageElement(COVERAGE_CATEGORY, offerDetails.coverage)}
      {createOfferPageElement(TERM_CATEGORY, offerDetails.term)}
      {createOfferPageElement(CARRIER_CATEGORY, offerDetails.carrier)}
      <div className='logo-wrapper'>
        <img
          src={offerDetails.carrier_logo}
          className='logo'
          alt='carrier-logo'
        />
      </div>
    </div>
  ) : (
    <div>No offers</div>
  );
};
