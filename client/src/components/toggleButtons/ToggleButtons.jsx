import React from 'react';
import './ToggleButtons.css';
import ToggleButton from '@material-ui/lab/ToggleButton';
import ToggleButtonGroup from '@material-ui/lab/ToggleButtonGroup';

export const ToggleButtons = ({ gender, setGender }) => {
  const handleChange = (event, nextView) => {
    setGender(nextView);
  };

  return (
    <div className='toggle-element-wrapper'>
      <ToggleButtonGroup value={gender} exclusive onChange={handleChange}>
        <ToggleButton value='male' aria-label='bold' className='left-toggle'>
          Male
        </ToggleButton>
        <ToggleButton value='female' aria-label='bold' className='right-toggle'>
          Female
        </ToggleButton>
      </ToggleButtonGroup>
    </div>
  );
};
