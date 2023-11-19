import './App.css';
import LoginPage from './components/LoginPage';
import RegisterPage from './components/RegisterPage';
import styled from 'styled-components';
import logoLegia from './assets/logoLegia.svg';
import { useState } from 'react';
import RankingPage from './components/RankingPage';

const Logo = styled.img`
  width: 30%;
  margin-bottom: 5%;
`;

function App() {
  const [registerPage, setRegisterPage] = useState(false);
  const [logedUser, setLogedUser] = useState(false);

  return (
    <>
      <RankingPage></RankingPage>
      {/*
    <>
    {registerPage === false ? (
      <LoginPage
      setRegisterPage={setRegisterPage}
      setLogedUser={setLogedUser}
      logedUser={logedUser}
      />
      ) : (
        <RegisterPage setRegisterPage={setRegisterPage} />
        )}
        </>
        */}
    </>
  );
}

export default App;
