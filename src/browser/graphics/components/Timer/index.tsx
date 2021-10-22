import React, { useContext } from 'react';
import styled, { css, keyframes } from 'styled-components';
import { ScAdditionContext } from '../../providers/ScAdditionProvider';
import { SpeedcontrolContext } from '../../providers/SpeedcontrolProvider';

const Container = styled.div`
  display: grid;
  width: 100%;
  height: 100%;
  grid-template-rows: auto 2px auto;
  justify-items: center;
  align-items: center;
  font-family: 'Source Code Pro';
`;

const rainbow = keyframes`
  12%{color:#ff5353;}
  24%{color:#ffcf53;}
  36%{color:#e8ff53;}
  48%{color:#53ff5d;}
  60%{color:#53ffbc;}
  72%{color:#5393ff;}
  84%{color:#ca53ff;}
  100%{color:#ff53bd;}
`;

type TimerProps = {
  useRainbow: boolean;
  state: 'stopped'|'running'|'paused'|'finished';
}

const rainbowMixin = css`
  animation: ${rainbow} 3s infinite;
  color: #ff5353;
`;

const MainTime = styled.div`
  font-size: 48px;
  font-weight: 600;
  filter: drop-shadow(0 0 8px #222222);
  ${({state}: TimerProps) => (state === 'stopped' || state === 'paused') ? 'color: #888888;' : ''}
  ${({useRainbow, state}: TimerProps) => (state === 'finished' && !useRainbow) ? 'color: #fcf951;' : ''}
  ${({useRainbow, state}: TimerProps) => (state === 'finished' && useRainbow) ? rainbowMixin : ''}
`;

const Border = styled.div``;

const EstimateTime = styled.div``;

export const Timer = () => {

  const speedcontrol = useContext(SpeedcontrolContext);
  const scAdditions = useContext(ScAdditionContext);

  const currentRun = speedcontrol.runDataArray.find((_, index) => index === scAdditions.speedcontrolCurrentRunIndex);

  return (
    <Container>
      {
        currentRun && (
          <React.Fragment>
            <MainTime useRainbow={false} state={speedcontrol.timer?.state || 'running'}>
              {speedcontrol.timer?.time || ''}
            </MainTime>
            <Border />
            <EstimateTime>
              EST - {currentRun.estimate || ''}
            </EstimateTime>
          </React.Fragment>
        )
      }
    </Container>
  );
}