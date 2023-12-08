import React from 'react';
import styled from 'styled-components';

export default function PersonalSettingsList() {
  return (
    <Container>
      <ul>
        <li>Account info</li>
        <li>My types</li>
        <li>Lorem ipsum</li>
        <li>Lorem ipsum</li>
        <li>Lorem ipsum</li>
        <li>Settings</li>
      </ul>
    </Container>
  );
}

const Container = styled.div`
  width: 40vw;
  padding: 10px;
  border-radius: 10px;
  background-color: #242119;
  color: white;

  ul {
    width: 100%;
    list-style: none;

    li {
      width: 100%;
      border-radius: 5px;
      padding: 5px;
      margin-bottom: 2px;
    }

    li:hover {
      background-color: #000000;
    }
  }
`;
