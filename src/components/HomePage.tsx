import React, { useState } from 'react';
import './css/HomePage.scss';
import CardMatch from './smallComponents/CardMatch';
import styled from 'styled-components';
import LegiaLogo from '../assets/legiaWarsaw.png';
import BayernLogo from '../assets/bayernMunchen.png';
import UCLLogo from '../assets/uclLogo.png';
import Users from './jsonFiles/users.json';
import ProfileImage from '../assets/profile.svg';
import RankingImage from '../assets/ranking.svg';
import { Link } from 'react-router-dom';

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

function HomePage() {
  
  return (
    <>
      <Header>
        <Link to={'/ranking'} className="rankingContainer">
          <img className="rankingLink" src={RankingImage} alt="" />
        </Link>
        <Profile src={ProfileImage}></Profile>
        <Link to={'/'}>
          <button className="logOutButton">LOG OUT</button>
        </Link>
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
  );
}

export default HomePage;
