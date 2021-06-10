import styled from 'styled-components';
import Grid from '@material-ui/core/Grid';

export const Wrapper = styled.div`
  width: ${({ matches }) => (matches ? `70%` : `30%`)};
  height: ${({ matches }) => (matches ? `80%` : `50%`)};
  background-color: white;
`;

export const Title = styled.div`
  height: 10%;
  font-size: 2em;
  display: flex;
  justify-content: center;
  font-family: 'Bebas Neue', cursive;
`;

export const LogoWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

export const NoOfferMessage = styled.div`
  width: ${({ matches }) => (matches ? `70%` : `30%`)};
  height: ${({ matches }) => (matches ? `80%` : `50%`)};
  background-color: white;
  font-size: ${({ matches }) => (matches ? `5em` : `3em`)};
`;

export const ElementWrapper = styled(Grid)`
  margin-left: 2%;
  height: 20%;
  font-size: 1.3em;
  display: flex;
  justify-content: center;
  font-family: 'Patrick Hand', cursive;
`;
