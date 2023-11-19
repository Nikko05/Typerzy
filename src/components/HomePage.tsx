import React, { useState } from 'react';
import './css/HomePage.scss';
import CardMatch from './componentsHomePage/CardMatch';
import styled from 'styled-components';
import LegiaLogo from '../assets/legiaWarsaw.png';
import BayernLogo from '../assets/bayernMunchen.png';
import UCLLogo from '../assets/uclLogo.png';
import Users from './jsonFiles/users.json';
import ProfileImage from '../assets/profile.svg';
import RankingImage from '../assets/ranking.svg';
import RankingPage from './RankingPage';
import LoginPage from './LoginPage';

//#090c02
const ContainerMatches = styled.body`
  height: 80vh;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

const Header = styled.div`
  height: 10vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Profile = styled.img`
  width: 40px;
  height: 40px;
  border: 1.5px solid black;
  position: absolute;
  top: 20px;
  left: calc(10vw - 12px);
  border-radius: 50%;
  padding: 2px;
`;

const teams = [
  {
    nameFirtsTeam: 'Legia',
    logoFirstTeam: LegiaLogo,
    nameSecondTeam: 'Bayern',
    logoSecondTeam: BayernLogo,
    competitionName: 'UEFA Champions League',
    competitionLogo: UCLLogo,
  },
  {
    nameFirtsTeam: 'Legia',
    logoFirstTeam: LegiaLogo,
    nameSecondTeam: 'Bayern',
    logoSecondTeam: BayernLogo,
    competitionName: 'UEFA Champions League',
    competitionLogo: UCLLogo,
  },
  {
    nameFirtsTeam: 'Legia',
    logoFirstTeam: LegiaLogo,
    nameSecondTeam: 'Bayern',
    logoSecondTeam: BayernLogo,
    competitionName: 'UEFA Champions League',
    competitionLogo: UCLLogo,
  },
  {
    nameFirtsTeam: 'Legia',
    logoFirstTeam: LegiaLogo,
    nameSecondTeam: 'Bayern',
    logoSecondTeam: BayernLogo,
    competitionName: 'UEFA Champions League',
    competitionLogo: UCLLogo,
  },
];

interface homePage {
  logedUser: boolean;
  setLogedUser: React.Dispatch<React.SetStateAction<boolean>>;
  setRegisterPage: React.Dispatch<React.SetStateAction<boolean>>;
}

function HomePage({ logedUser, setLogedUser, setRegisterPage }: homePage) {
  const handleLogOut = () => {
    setLogedUser(false);
  };

  return (
    <>
      {logedUser === true ? (
        <>
          <Header>
            <div className="rankingContainer">
              <img className="rankingLink" src={RankingImage} alt="" />
            </div>
            <Profile src={ProfileImage}></Profile>
            <button className="logOutButton" onClick={handleLogOut}>
              LOG OUT
            </button>
          </Header>
          <ContainerMatches>
            {teams.map(
              (
                {
                  nameFirtsTeam,
                  logoFirstTeam,
                  nameSecondTeam,
                  logoSecondTeam,
                  competitionName,
                  competitionLogo,
                },
                index
              ) => (
                <CardMatch
                  key={index}
                  nameFirstTeam={nameFirtsTeam}
                  logoFirstTeam={logoFirstTeam}
                  nameSecondTeam={nameSecondTeam}
                  logoSecondTeam={logoSecondTeam}
                  competiitonName={competitionName}
                  competitionLogo={competitionLogo}
                />
              )
            )}
          </ContainerMatches>
        </>
      ) : (
        <LoginPage
          logedUser={false}
          setLogedUser={() => setLogedUser(false)}
          setRegisterPage={() => setRegisterPage(false)}
        />
      )}
    </>
  );
}

export default HomePage;
