import TextField from '@material-ui/core/TextField';
import './TextInput.css';

export const TextInput = ({ id, label, state, setState }) => {
  const handleChange = (event) => {
    setState(event.target.value);
  };
  return (
    <div className='text-input-element-wrapper'>
      <TextField
        id={id}
        label={label}
        variant='filled'
        onChange={handleChange}
        value={state}
        type='number'
        className='text-field'
      />
    </div>
  );
};
