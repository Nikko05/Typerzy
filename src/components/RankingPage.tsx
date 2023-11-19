import React from 'react';
import RankingDB from '../components/jsonFiles/ranking.json';
import styled from 'styled-components';
import './css/RankingPage.scss';

const UserElement = styled.li`
  width: 90vw;
  display: flex;
  flex-direction: column;
  padding: 5px 0;

  ul {
    display: flex;
    width: 100%;
  }

  &::after {
    content: '';

    height: 2px;
    width: 100%;
    background-color: black;
  }
`;

const BackToHomePage = styled.button`
  padding: 5px 15px;
  font-size: 1.2rem;
  border: 1.5px solid black;
  border-radius: 10px;
  position: absolute;
  top: 20px;
  left: 5vw;
`

function RankingPage() {
  return (
    <>
      <BackToHomePage>Back</BackToHomePage>
      <div className="titleOfUsersList">
        <ul className="oneUserList">
          <li>LP.</li>
          <li>Name</li>
          <li>MP</li>
          <li>W</li>
          <li>L</li>
          <li>D</li>
          <li>Pkt.</li>
        </ul>
      </div>

      {RankingDB.map(
        (
          {
            name,
            points,
            badTpedMatches,
            correctWinnerTyped,
            matchesTypes,
            wellTypedmatches,
          },
          index
        ) => (
          <>
            <UserElement>
              <ul key={index} className="oneUserList">
                <li>{index + 1}</li>
                <li>{name}</li>
                <li>{matchesTypes}</li>
                <li>{wellTypedmatches}</li>
                <li>{badTpedMatches}</li>
                <li>{correctWinnerTyped}</li>
                <li>{points}</li>
              </ul>
            </UserElement>
          </>
        )
      )}
    </>
  );
}

export default RankingPage;
