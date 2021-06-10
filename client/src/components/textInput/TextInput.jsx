import { InputWrapper, InputField } from './TextInput.styles';
import { useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';

export const TextInput = ({ id, label, state, setState }) => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down('md'));

  const handleChange = (event) => {
    setState(event.target.value);
  };
  return (
    <InputWrapper matches={matches}>
      <InputField
        id={id}
        label={label}
        variant='filled'
        onChange={handleChange}
        value={state}
        type='number'
      />
    </InputWrapper>
  );
};
