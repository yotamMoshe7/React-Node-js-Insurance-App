import React from 'react';
import Grid from '@material-ui/core/Grid';
import 'date-fns';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from '@material-ui/pickers';

export const Calender = ({ birthdate, setBirthdate }) => {
  const handleDateChange = (date) => {
    setBirthdate(new Date(date));
  };

  return (
    <Grid container item xs={10} md={8}>
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <KeyboardDatePicker
          margin='normal'
          id='date-picker-dialog'
          label='Select birthday date'
          format='MM/dd/yyyy'
          value={birthdate}
          onChange={handleDateChange}
          KeyboardButtonProps={{
            'aria-label': 'change date',
          }}
        />
      </MuiPickersUtilsProvider>
    </Grid>
  );
};
