import React, { useState } from 'react';
import styled from 'styled-components';
interface CardInformations {
  nameFirstTeam: string;
  logoFirstTeam: string;
  nameSecondTeam: string;
  logoSecondTeam: string;
  competiitonName: string;
  competitionLogo: string;
}

function CardMatch({
  nameFirstTeam,
  logoFirstTeam,
  nameSecondTeam,
  logoSecondTeam,
  competiitonName,
  competitionLogo,
}: CardInformations) {
  const [firstTeam, setFirstTeam] = useState(nameFirstTeam);
  const [secondTeam, setSecondTeam] = useState(nameSecondTeam);
  const [infoAboutMatch, setInfoAboutMatch] = useState({
    date: '12.12.2023',
    place: 'Warsaw',
    competition: 'UEFA Champions League 2024',
  });

  return (
    <ContainerMatchCard>
      <InfoAboutMatch>
        <img className="uclLogo" src={competitionLogo} alt="UCL logo" />
        <div>{competiitonName}</div>
      </InfoAboutMatch>
      <InlineMatch>
        <div className="container">
          <Logo src={logoFirstTeam} alt="Legia Warsaw logo"></Logo>
          <div>{firstTeam}</div>
          <input type="number" className="inputForResult" />
        </div>
        <Separator style={{ display: 'flex' }}>vs</Separator>
        <div className="container">
          <input type="number" className="inputForResult" />
          {secondTeam}
          <Logo src={logoSecondTeam} alt="Bayern Munchen logo"></Logo>
        </div>
      </InlineMatch>
      <InfoAboutMatch>
        <div className="dateOfMatch">{infoAboutMatch.date}</div>
      </InfoAboutMatch>
    </ContainerMatchCard>
  );
}

export default CardMatch;

const ContainerMatchCard = styled.div`
  border: 1.5px solid #747c92;
  padding: 12px 20px 0;
  border-radius: 25px;
  color: black;
`;

const InlineMatch = styled.div`
  width: 74vw;
  display: flex;
  justify-content: space-between;
  font-size: 1.1rem;
`;

const InfoAboutMatch = styled.div`
  display: flex;
  font-size: 0.8rem;
  margin-bottom: 10px;
  opacity: 0.9;
`;

const Logo = styled.img`
  height: 24px;
`;

const Separator = styled.div`
  display: felx;
  align-items: center;
  justify-content: center;
  padding: 0 10px;
`;
