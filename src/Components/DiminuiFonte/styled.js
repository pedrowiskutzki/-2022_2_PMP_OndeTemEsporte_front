import styled from 'styled-components';

export const Button = styled.button`
  background-color: transparent;
  border: 0mm;
  z-index: 2;
  float: left;
  color: #fff;

  &:focus {
    width: 72px;
    height: 70px;
    border-radius: 60px;
    background-color: hsla(166, 54%, 46%, 0.4);
  }
`;