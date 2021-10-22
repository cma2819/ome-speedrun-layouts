import React from 'react';
import { RunData } from '../../../../nodecg/external/speedcontrol/RunData';
import styled from 'styled-components';
import { PlayerIcon } from '../../organisms/Icons/PlayerIcon';
import { ContentLabel } from './ContentLabel';

type Props = {
  nextRun: RunData;
};

const Container = styled.div`
  width: 100%;
  height: 100%;
  padding: 0px 8px;

  display: grid;
  grid-template-columns: auto auto 2px auto;
  grid-gap: 16px;
  justify-content: start;
`;

const Border = styled.div`
  background-color: white;
`;

export const NextSchedule = ({ nextRun }: Props) => {

  const currentRunner = nextRun.teams.flatMap(team => team.players.map(player => player.name)).join(',');

  return (
    <Container>
      <ContentLabel iconClass="fas fa-angle-double-right" text="Next" />
      <div>
        {nextRun.game} - {nextRun.category}
      </div>
      <Border />
      <div>
        <PlayerIcon /> {currentRunner}
      </div>
    </Container>
  )
}