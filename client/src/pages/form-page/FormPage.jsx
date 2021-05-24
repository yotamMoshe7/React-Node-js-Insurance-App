import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router';
import './FormPage.css';
import axios from 'axios';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import { useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { Calender } from '../../components/calender/Calender';
import { ToggleButtons } from '../../components/toggleButtons/ToggleButtons';
import { TextInput } from '../../components/textInput/TextInput';
import {
  ZIPCODE_TEXT,
  INCOME_TEXT,
  OFFER_URL,
  OFFER_PAGE_ROUTE,
  LOCAL_STORAGE_OFFER_DETAILS,
  LOCAL_STORAGE_USER_DETAILS,
} from '../../utility/constants/Constants';
import { isMatch } from 'date-fns';

export const FormPage = () => {
  const [errors, setErrors] = useState([]);
  const [zipcode, setZipcode] = useState('');
  const [income, setIncome] = useState('');
  const [birthdate, setBirthdate] = useState(new Date());
  const [gender, setGender] = useState(null);

  const history = useHistory();
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down('md'));

  // Initial user details from local storage
  useEffect(() => {
    let isMounted = true;
    if (isMounted) {
      if (
        JSON.parse(localStorage.getItem(LOCAL_STORAGE_USER_DETAILS)) !== null
      ) {
        setZipcode(
          JSON.parse(localStorage.getItem(LOCAL_STORAGE_USER_DETAILS))
            .zipCode || ''
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
    }
    return () => {
      isMounted = false;
    };
  }, []);

  const submitButtonClick = async () => {
    try {
      // Initial errors state
      setErrors([]);

      // Make request to server
      let date = new Date(birthdate);
      let formatBirthDate = `${date.getFullYear()}-${
        date.getMonth() + 1
      }-${date.getDate()} 00:00:00`;

      let serverResult = await axios.post(OFFER_URL, {
        zipCode: zipcode,
        gender: gender,
        birthdate: formatBirthDate,
        income: parseInt(income),
      });

      // Check that there is no errors
      if (errors.length === 0) {
        // Save offer details and user input to local storage
        localStorage.setItem(
          LOCAL_STORAGE_USER_DETAILS,
          JSON.stringify({
            zipCode: zipcode,
            gender: gender,
            birthdate: formatBirthDate,
            income: parseInt(income),
          })
        );
        localStorage.setItem(
          LOCAL_STORAGE_OFFER_DETAILS,
          JSON.stringify(serverResult.data.data)
        );
        history.push({
          pathname: OFFER_PAGE_ROUTE,
          state: { serverResult: serverResult.data },
        });
      }
    } catch (error) {
      console.log(error);
      if (error.response !== null && error.response !== undefined) {
        console.log(error.response);
        setErrors(error.response.data.errors);
      } else {
        setErrors(['Server error']);
      }
    }
  };

  const createFormElement = (element) => {
    return (
      <Grid
        container
        item
        xs={12}
        md={6}
        justify='center'
        alignItems='center'
        className='grid-item'
      >
        {element}
      </Grid>
    );
  };
  return (
    <div className={matches ? 'mobile-wrapper' : 'wrapper'}>
      <form className='form'>
        <Grid
          container
          item
          xs={12}
          direction='row'
          justify='center'
          alignItems='center'
          className='grid-container'
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
          <Button
            onClick={submitButtonClick}
            variant='contained'
            color='primary'
            className='submit-button'
          >
            Submit
          </Button>
        </Grid>
        <Grid
          container
          direction='column'
          justify='center'
          alignItems='center'
          className={isMatch ? 'mobile-error-message' : 'error-message'}
        >
          {errors.length > 0
            ? errors.map((error, index) => (
                <Grid key={index} container item justify='center'>
                  {error}
                </Grid>
              ))
            : null}
        </Grid>
      </form>
    </div>
  );
};
