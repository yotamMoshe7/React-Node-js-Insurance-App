import styled from 'styled-components';

export const Wrapper = styled.div`
  width: ${({ matches }) => (matches ? `70%` : `50%`)};
  height: 5%;
`;

export const Button = styled.button`
  width: 20%;
  height: 100%;
  font-size: ${({ matches }) => (matches ? `1em` : `1.5em`)};
  font-weight: bold;
  margin-left: ${({ isOfferButton }) => (isOfferButton ? `2%` : null)};

  &:hover {
    background-color: gray;
  }
`;
