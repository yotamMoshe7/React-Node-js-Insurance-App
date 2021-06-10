import React from 'react';
import { useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import {
  PRICE_CATEGORY,
  COVERAGE_CATEGORY,
  TERM_CATEGORY,
  CARRIER_CATEGORY,
} from '../../utility/constants/Constants';
import { connect } from 'react-redux';
import {
  Wrapper,
  Title,
  LogoWrapper,
  NoOfferMessage,
  ElementWrapper,
} from './OfferPage.styles';

const OfferPage = ({ currentOffer }) => {
  const theme = useTheme();

  const matches = useMediaQuery(theme.breakpoints.down('md'));

  const createOfferPageElement = (category, data) => {
    return (
      <ElementWrapper container>
        <div>{category}:</div>
        <div>{data}</div>
      </ElementWrapper>
    );
  };

  return currentOffer !== null ? (
    <Wrapper matches={matches}>
      <Title>Offer Page</Title>
      {createOfferPageElement(PRICE_CATEGORY, currentOffer.price)}
      {createOfferPageElement(COVERAGE_CATEGORY, currentOffer.coverage)}
      {createOfferPageElement(TERM_CATEGORY, currentOffer.term)}
      {createOfferPageElement(CARRIER_CATEGORY, currentOffer.carrier)}
      <LogoWrapper>
        <img src={currentOffer.carrier_logo} alt='carrier-logo' />
      </LogoWrapper>
    </Wrapper>
  ) : (
    <NoOfferMessage matches={matches}>No offers</NoOfferMessage>
  );
};

const mapStateToProps = (state) => ({
  currentOffer: state.offer.currentOffer,
});

export default connect(mapStateToProps)(OfferPage);
