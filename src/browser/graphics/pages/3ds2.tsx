import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import { GraphicsApp } from '../GraphicsApp';
import { Logo } from '../components/Logo';
import { RunParticipants } from '../components/RunParticipants';
import { RunDataLabel } from '../components/RunDataLabel';
import { Timer } from '../components/Timer';
import { SimpleCard } from '../organisms/SimpleCard';
import { RacePlayer } from '../components/RacePlayer';

const LogoArea = styled.div`
  position: absolute;
  top: 16px;
  left: 804px;
  height: 160px;
  width: 320px;
  filter: drop-shadow(0 0 8px #222222);
`;

const VideoArea = styled.div`
  position: absolute;
  top: 32px;
  left: 32px;
  width: 740px;
  height: 444px;
  background-color: rgba(255, 255, 255, 0.6);
`;

const VideoRaceArea = styled.div`
  position: absolute;
  top: 32px;
  right: 32px;
  width: 740px;
  height: 444px;
  background-color: rgba(255, 255, 255, 0.6);
`;

const SecondVideoArea = styled.div`
  position: absolute;
  top: 528px;
  left: 32px;
  width: 400px;
  height: 300px;
  background-color: rgba(255, 255, 255, 0.6);
`;

const SecondRaceVideoArea = styled.div`
  position: absolute;
  top: 528px;
  right: 32px;
  width: 400px;
  height: 300px;
  background-color: rgba(255, 255, 255, 0.6);
`;

const Participants = styled.div`
  position: absolute;
  top: 658px;
  left: 587px;
  width: 746px;
  height: 120px;
`;

const InfoArea = styled.div`
  position: absolute;
  bottom: 32px;
  right: 32px;
  width: 1856px;
  height: 128px;
  padding: 8px 8px;

  display: grid;
  grid-template-columns: auto auto;
  align-items: center;
  column-gap: 16px;
`;

const InfoRow = styled(SimpleCard)`
  display: flex;
  padding: 16px 16px;
`;

const FirstPlayer = styled.div`
  position: absolute;
  top: 528px;
  left: 448px;
  width: 460px;
  height: 120px;
`;

const SecondPlayer = styled.div`
  position: absolute;
  top: 528px;
  right: 448px;
  width: 460px;
  height: 120px;
`;

const App = () => {
  return (
    <React.Fragment>
      <GraphicsApp>
        <LogoArea>
          <Logo />
        </LogoArea>
        <VideoArea />
        <VideoRaceArea />
        <SecondVideoArea />
        <SecondRaceVideoArea />
        <FirstPlayer>
          <RacePlayer index={0} />
        </FirstPlayer>
        <SecondPlayer>
          <RacePlayer index={1} />
        </SecondPlayer>
        <Participants>
          <RunParticipants race />
        </Participants>
        <InfoArea>
          <InfoRow>
            <RunDataLabel />
          </InfoRow>
          <InfoRow>
            <Timer />
          </InfoRow>
        </InfoArea>
      </GraphicsApp>
    </React.Fragment>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
