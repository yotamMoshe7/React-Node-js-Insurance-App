import styled from 'styled-components';
import TextField from '@material-ui/core/TextField';

export const InputWrapper = styled.div`
  height: 15%;
  display: flex;
  align-items: center;
  width: ${({ matches }) => (matches ? `50%` : `50%`)};
`;

export const InputField = styled(TextField)`
  width: 100%;
`;
