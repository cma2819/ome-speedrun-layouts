import React, { useContext } from 'react';
import styled from 'styled-components';
import { SpeedcontrolPlayer } from '../../../../nodecg/external/speedcontrol-additions/speedcontrolPlayer';
import { RunData } from '../../../../nodecg/external/speedcontrol/RunData';
import { Nameplate } from '../../organisms/Nameplate';
import { CommentatorContext } from '../../providers/CommentatorProvider';
import { ScAdditionContext } from '../../providers/ScAdditionProvider';
import { SpeedcontrolContext } from '../../providers/SpeedcontrolProvider';

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 8px;
  height: 100%;
  align-content: center;
`;

const Plate = styled.div`
  padding: 4px 16px;
  background-color: rgba(0, 0, 0, 0.6);
`;

type Props = {
  race?: boolean
};

export const RunParticipants = ({ race = false }: Props) => {

  const speedcontrol = useContext(SpeedcontrolContext);
  const scAdditions = useContext(ScAdditionContext);
  const commentators = useContext(CommentatorContext);

  const currentRun = speedcontrol.runDataArray.find((_, index) => index === scAdditions.speedcontrolCurrentRunIndex);
  const currentCommentators = currentRun && currentRun.externalID
    ? commentators[currentRun.externalID] || []
    : [];

  const playersFromRun = (run: RunData) => {
    return run.teams.flatMap(team => team.players);
  }

  const socialsForPlayer = (player: SpeedcontrolPlayer) => {
    const social = scAdditions.speedcontrolUserAdditionArray.find(addition => addition.id === player.customData.oengusId);
    return {
      twitch: player.social.twitch,
      twitter: social?.social.twitter,
      nico: social?.social.nico,
      youtube: social?.social.youtube,
    };
  }

  return (
    <Container>
      {
        !race && currentRun && playersFromRun(currentRun).map(player => (
          <Plate key={player.id}>
            <Nameplate
              name={player.name}
              socials={socialsForPlayer(player)}
              role="runner"
            />
          </Plate>
        ))
      }
      {
        currentCommentators.length > 0 && currentCommentators.map(commentator => 
          (
            <Plate>
              <Nameplate
                name={commentator.name}
                socials={commentator.social}
                role="commentator"
              />
            </Plate>
          )
        )
      }
    </Container>
  );
}