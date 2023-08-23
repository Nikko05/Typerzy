import styled from 'styled-components';

export const Header = styled.h1`
  margin: 10px 0 5px;
`;

export const Description = styled.div`
  margin: 0 0 10px;
  opacity: 0.7;
  font-size: 0.95em;
`;

export const PrefixInput = styled.label`
  color: black;
  opacity: 0.9;
  font-weight: 600;
`;

export const Option = styled.div`
  opacity: 0.6;
  display: flex;
  text-align: center;
  align-items: center;
  width: 100%;
  margin-top: 10px;
  font-size: 0.9em;

  &::before {
    content: '';

    width: 29%;
    height: 1px;
    background-color: black;
    margin: 0 10px;
  }

  &::after {
    content: '';

    width: 30%;
    height: 1px;
    background-color: black;
    margin: 0 10px;
  }
`;