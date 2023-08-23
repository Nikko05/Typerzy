import './App.css';
import LoginPage from './components/LoginPage';
import RegisterPage from './components/RegisterPage';
import styled from 'styled-components';
import logoLegia from './assets/logoLegia.svg';
import { useState } from 'react';

const Logo = styled.img`
  width: 30%;
  margin-bottom: 5%;
`

function App() {
  const [loginPage, setLoginPage] = useState(true);
  return (
    <>
      <Logo src={logoLegia} alt="" />
      {loginPage === true ? (
        <LoginPage setLoginPage={setLoginPage} />
      ) : (
        <RegisterPage setLoginPage={setLoginPage} />
      )}
    </>
  );
}

export default App;
