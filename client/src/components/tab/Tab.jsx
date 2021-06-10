import React from 'react';
import { useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useHistory } from 'react-router';
import {
  FORM_PAGE_ROUTE,
  OFFER_PAGE_ROUTE,
} from '../../utility/constants/Constants';
import { Wrapper, Button } from './Tab.styles';

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
    <Wrapper matches={matches}>
      <Button onClick={formButtonClick} matches={matches}>
        Form
      </Button>
      <Button onClick={offerButtonClick} matches={matches} isOfferButton={true}>
        Offer
      </Button>
    </Wrapper>
  );
};
