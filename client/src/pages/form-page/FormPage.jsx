import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router';
import Grid from '@material-ui/core/Grid';
import { useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { Calender } from '../../components/calender/Calender';
import { ToggleButtons } from '../../components/toggleButtons/ToggleButtons';
import { TextInput } from '../../components/textInput/TextInput';
import {
  ZIPCODE_TEXT,
  INCOME_TEXT,
  OFFER_PAGE_ROUTE,
  LOCAL_STORAGE_USER_DETAILS,
} from '../../utility/constants/Constants';
import { connect } from 'react-redux';
import {
  fetchOfferStart,
  offerInitialErrorsState,
} from '../../redux/offer/offer.actions';
import {
  Wrapper,
  Form,
  ElementsWrapper,
  SubmitButton,
  ErrorMessage,
} from './FormPage.styles';

const FormPage = ({
  fetchOfferStartAsync,
  errorsMessage,
  offerInitialErrorsState,
  fetchOfferStart,
}) => {
  const [zipcode, setZipcode] = useState('');
  const [income, setIncome] = useState('');
  const [birthdate, setBirthdate] = useState(new Date());
  const [gender, setGender] = useState(null);

  const history = useHistory();
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down('md'));

  // Initial user details from local storage
  useEffect(() => {
    if (JSON.parse(localStorage.getItem(LOCAL_STORAGE_USER_DETAILS)) !== null) {
      setZipcode(
        JSON.parse(localStorage.getItem(LOCAL_STORAGE_USER_DETAILS)).zipCode ||
          ''
      );
      setIncome(
        JSON.parse(localStorage.getItem(LOCAL_STORAGE_USER_DETAILS)).income ||
          ''
      );
      setBirthdate(
        JSON.parse(localStorage.getItem(LOCAL_STORAGE_USER_DETAILS))
          .birthdate || new Date()
      );
      setGender(
        JSON.parse(localStorage.getItem(LOCAL_STORAGE_USER_DETAILS)).gender ||
          ''
      );
    }
  }, []);

  // Trigger when error array update
  useEffect(() => {
    if (errorsMessage !== undefined) {
      // Check that there is no errors
      if (errorsMessage.length === 0) {
        history.push({
          pathname: OFFER_PAGE_ROUTE,
        });

        // Initial errors state to prevent infinitie loop
        offerInitialErrorsState();
      }
    }
  }, [errorsMessage, history, offerInitialErrorsState]);

  const submitButtonClick = () => {
    try {
      // Format date
      let date = new Date(birthdate);
      let formatBirthDate = `${date.getFullYear()}-${
        date.getMonth() + 1
      }-${date.getDate()} 00:00:00`;

      // Create object for server request
      const userDetails = {
        zipCode: zipcode,
        gender: gender,
        birthdate: formatBirthDate,
        income: parseInt(income),
      };
      // Make request to server
      fetchOfferStart(userDetails);
    } catch (error) {
      console.log(error);
    }
  };

  const createFormElement = (element) => {
    return (
      <Grid container item xs={12} md={6} justify='center' alignItems='center'>
        {element}
      </Grid>
    );
  };
  return (
    <Wrapper matches={matches}>
      <Form>
        <ElementsWrapper
          container
          item
          xs={12}
          direction='row'
          justify='center'
          alignItems='center'
        >
          {createFormElement(
            <TextInput
              state={zipcode}
              setState={setZipcode}
              id='zipcode'
              label={ZIPCODE_TEXT}
            />
          )}
          {createFormElement(
            <TextInput
              state={income}
              setState={setIncome}
              id='income'
              label={INCOME_TEXT}
            />
          )}
          {createFormElement(
            <ToggleButtons gender={gender} setGender={setGender} />
          )}
          {createFormElement(
            <Calender birthdate={birthdate} setBirthdate={setBirthdate} />
          )}
          <SubmitButton
            onClick={submitButtonClick}
            variant='contained'
            color='primary'
            className='submit-button'
          >
            Submit
          </SubmitButton>
        </ElementsWrapper>
        <ErrorMessage
          container
          direction='column'
          justify='center'
          alignItems='center'
        >
          {errorsMessage !== undefined
            ? errorsMessage.map((error, index) => (
                <Grid key={index} container item justify='center'>
                  {error}
                </Grid>
              ))
            : null}
        </ErrorMessage>
      </Form>
    </Wrapper>
  );
};

const mapDispatchToProps = (dispatch) => ({
  fetchOfferStart: (offerReq) => dispatch(fetchOfferStart(offerReq)),
  offerInitialErrorsState: () => dispatch(offerInitialErrorsState()),
});

const mapStateToProps = (state) => ({
  errorsMessage: state.offer.errorMessage,
});

export default connect(mapStateToProps, mapDispatchToProps)(FormPage);
