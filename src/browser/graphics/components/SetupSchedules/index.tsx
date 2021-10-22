import React, { useContext } from 'react';
import styled from 'styled-components';
import { CommentatorContext } from '../../providers/CommentatorProvider';
import { ScAdditionContext } from '../../providers/ScAdditionProvider';
import { SpeedcontrolContext } from '../../providers/SpeedcontrolProvider';
import { OnDeckRun } from '../../organisms/OnDeckRun';

const Container = styled.div`
  display: grid;
  grid-template-rows: 3fr 2fr 2fr;
  align-content: space-between;
  height: 100%;
  width: 100%;
`;

const NextRun = styled.div`
  display: grid;
  align-content: space-around;
`;

const Deck = styled.div`
  display: grid;
  align-content: space-around;
`;

export const SetupSchedules = () => {

  const speedcontrol = useContext(SpeedcontrolContext);
  const scAdditions = useContext(ScAdditionContext);
  const commentators = useContext(CommentatorContext);

  const nextRun = speedcontrol.runDataArray.find((_, index) => {
    return index === scAdditions.speedcontrolCurrentRunIndex;
  });

  const onDeckRuns = speedcontrol.runDataArray.slice(
    scAdditions.speedcontrolCurrentRunIndex + 1,
    scAdditions.speedcontrolCurrentRunIndex + 3
  );

  const scheduledToTime = (scheduled?: string) => {
    if (!scheduled) {
      return '';
    }
    const date = new Date(scheduled);

    return `${date.getHours().toString().padStart(2, '0')}:${date.getMinutes().toString().padStart(2, '0')}`;
  }

  return (
    <Container>
      <NextRun>
        {
          nextRun && (
            <OnDeckRun
              game={nextRun.game || ''}
              category={nextRun.category || ''}
              console={nextRun.system || ''}
              estimate={nextRun.estimate || ''}
              runners={nextRun.teams.flatMap(team => team.players.map(player => player.name)) || []}
              commentators={
                nextRun.externalID && commentators[nextRun.externalID]
                  ? commentators[nextRun.externalID].map(commentator => commentator.name)
                  : []
              }
            ></OnDeckRun>
          )
        }
      </NextRun>
      { onDeckRuns.map((run) => (
        <Deck key={run.id}>
          <OnDeckRun
            small
            game={run.game || ''}
            category={run.category || ''}
            console={run.system || ''}
            estimate={run.estimate || ''}
            runners={run.teams.flatMap(team => team.players.map(player => player.name)) || []}
            commentators={
              run.externalID && commentators[run.externalID]
                ? commentators[run.externalID].map(commentator => commentator.name)
                : []
            }
            startAt={scheduledToTime(run.scheduled)}
          ></OnDeckRun>
        </Deck>
      ))}
    </Container>
  )
}