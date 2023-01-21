import React, { useContext } from 'react';
import { ScAdditionContext } from '../../../graphics/providers/ScAdditionProvider';
import { SpeedcontrolContext } from '../../../graphics/providers/SpeedcontrolProvider';
import { Connection } from './Connection';

export const ConnectLivesplit = () => {

  const speedcontrol = useContext(SpeedcontrolContext);
  const scAdditions = useContext(ScAdditionContext);

  const currentRun = speedcontrol.runDataArray.find((_, index) => index === scAdditions.speedcontrolCurrentRunIndex);

  return (
    <>
      { currentRun?.teams.map((team, idx) => (
        <Connection key={team.id} id={team.id} index={idx} />
      ))}
    </>
  )
}