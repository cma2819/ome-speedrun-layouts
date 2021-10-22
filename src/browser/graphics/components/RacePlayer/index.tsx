import React, { useContext } from 'react';
import styled from 'styled-components';
import { SpeedcontrolPlayer } from '../../../../nodecg/external/speedcontrol-additions';
import { Nameplate } from '../../organisms/Nameplate';
import { ScAdditionContext } from '../../providers/ScAdditionProvider';
import { SpeedcontrolContext } from '../../providers/SpeedcontrolProvider';

type Props = {
  index: number;
}

const Container = styled.div`
  padding: 4px 16px;
  background-color: rgba(0, 0, 0, 0.6);
`;

export const RacePlayer = ({index}: Props) => {

  const speedcontrol = useContext(SpeedcontrolContext);
  const scAdditions = useContext(ScAdditionContext);

  const currentRun = speedcontrol.runDataArray.find((_, index) => index === scAdditions.speedcontrolCurrentRunIndex);
  const player = currentRun?.teams.flatMap(team => team.players).find((_, _index) => _index === index);
  const team = currentRun?.teams.find(team => team.players.find(p => p.id === player?.id ));

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
        player && (
          <Nameplate
            name={player.name}
            socials={socialsForPlayer(player)}
            role="runner"
            time={
              team && speedcontrol?.timer?.teamFinishTimes &&
              speedcontrol.timer.teamFinishTimes[team.id]?.time
            }
          />
        )
      }
    </Container>
  )
}