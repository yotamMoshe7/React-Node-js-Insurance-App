import React from 'react';
import ToggleButtonGroup from '@material-ui/lab/ToggleButtonGroup';
import { Wrapper, Button } from './ToggleButtons.styles';

export const ToggleButtons = ({ gender, setGender }) => {
  const handleChange = (event, nextView) => {
    setGender(nextView);
  };

  return (
    <Wrapper>
      <ToggleButtonGroup value={gender} exclusive onChange={handleChange}>
        <Button value='male' aria-label='bold'>
          Male
        </Button>
        <Button value='female' aria-label='bold'>
          Female
        </Button>
      </ToggleButtonGroup>
    </Wrapper>
  );
};
