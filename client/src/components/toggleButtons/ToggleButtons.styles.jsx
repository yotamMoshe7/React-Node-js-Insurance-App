import styled from 'styled-components';
import ToggleButton from '@material-ui/lab/ToggleButton';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const Button = styled(ToggleButton)`
  border-color: gray !important;
  width: 50%;
`;
