import styled from 'styled-components';

export const ContainerInput = styled.div`
  margin: 8px 0;
  background: transparent;
  display: flex;
  align-items: center;
  border: none;
  border: 1px solid #d8d8d885;
  padding: 16px 20px;
  font-size: 0.8em;
  font-weight: 600;
  border-radius: 30px;
  background-color: #e1e1e16c;
`;

export const Input = styled.input`
  background: transparent;
  border: none;
  outline: none;
  min-width: 90%;
  flex: 1;
`

export const InputSubmit = styled.input`
  margin: 8px 0;
  background: transparent;
  font-size: 0.8em;
  font-weight: 600;
  border: none;
  background-color: blue;
  color: white;
  border-radius: 30px;
  padding: 16px;

  &:active {
    border: 2px solid blue;
    background-color: transparent;
    color: blue;
  }
`;

export const Img = styled.img`
  height: 9px;
  padding: 0 10px;
`;