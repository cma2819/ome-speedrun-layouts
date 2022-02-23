import React, { useContext } from 'react';
import styled from 'styled-components';
import { ScAdditionContext } from '../../providers/ScAdditionProvider';
import { SpeedcontrolContext } from '../../providers/SpeedcontrolProvider';

const Container = styled.div`
  display: grid;
  width: 100%;
  height: 100%;
  grid-template-rows: auto 4px auto;
  grid-gap: 12px;
`;

const GameText = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  font-size: 32px;
  font-weight: bold;
  width: 100%;
`;

const TextElem = styled.div`
  padding: 0px 8px;
  white-space: nowrap;
`;

const Border = styled.div`
  background-color: white;
`;

const CategoryText = styled.div`
  text-align: center;
`;

export const RunDataLabel = () => {

  const speedcontrol = useContext(SpeedcontrolContext);
  const scAdditions = useContext(ScAdditionContext);

  const currentRun = speedcontrol.runDataArray.find((_, index) => index === scAdditions.speedcontrolCurrentRunIndex);

  const currentNames = currentRun?.game?.split(' ');

  return (
    <Container>
      {
        currentRun && (
          <React.Fragment>
            <GameText>
              {/* {currentRun.game || ''} */}
              { currentNames?.map((name, index) => (
                <TextElem key={index}>{name}</TextElem>
              ))}
            </GameText>
            <Border />
            <CategoryText>
              {currentRun.category || ''}
            </CategoryText>
          </React.Fragment>
        )
      }
    </Container>
  );
}