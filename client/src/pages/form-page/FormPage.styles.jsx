import styled from 'styled-components';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';

export const Wrapper = styled.div`
  width: ${({ matches }) => (matches ? `70%` : `50%`)};
  height: ${({ matches }) => (matches ? `80%` : `50%`)};
  background-color: white;
`;

export const Form = styled.form`
  height: 100%;
  width: 100%;
`;

export const ElementsWrapper = styled(Grid)`
  height: 100%;
  width: 100%;
`;

export const SubmitButton = styled(Button)`
  width: 30%;
`;

export const ErrorMessage = styled(Grid)`
  color: red;
  font-size: ${({ matches }) => (matches ? `1em` : `1.5em`)};
  margin-top: 2%;
`;
