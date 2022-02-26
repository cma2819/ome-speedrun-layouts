import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import { GraphicsApp } from '../GraphicsApp';
import { Logo } from '../components/Logo';
import { RunParticipants } from '../components/RunParticipants';
import { Timer } from '../components/Timer';
import { RunDataLabel } from '../components/RunDataLabel';
import { RacePlayer } from '../components/RacePlayer';
import { SimpleCard } from '../organisms/SimpleCard';

const LogoArea = styled.div`
  position: absolute;
  top: 16px;
  left: 800px;
  height: 160px;
  width: 320px;
  filter: drop-shadow(0 0 8px #222222);
`;

const VideoArea = styled.div`
  position: absolute;
  top: 16px;
  left: 16px;
  width: 752px;
  height: 423px;
  background-color: rgba(255, 255, 255, 0.6);
`;

const FirstPlayer = styled.div`
  position: absolute;
  top: 180px;
  left: 768px;
  width: 362px;
  height: 120px;
`;

const SecondVideoArea = styled.div`
  position: absolute;
  top: 16px;
  right: 16px;
  width: 752px;
  height: 423px;
  background-color: rgba(255, 255, 255, 0.6);
`;

const SecondPlayer = styled.div`
  position: absolute;
  top: 312px;
  right: 768px;
  width: 362px;
  height: 120px;
`;

const ThirdVideoArea = styled.div`
  position: absolute;
  bottom: 16px;
  left: 16px;
  width: 752px;
  height: 423px;
  background-color: rgba(255, 255, 255, 0.6);
`;

const ThirdPlayer = styled.div`
  position: absolute;
  top: 588px;
  left: 768px;
  width: 362px;
  height: 120px;
`

const Participants = styled.div`
  position: absolute;
  top: 536px;
  left: 1264px;
  width: 640px;
  height: 320px;
`;

const InfoArea = styled.div`
  position: absolute;
  top: 856px;
  left: 768px;
  width: 1136px;
  height: 160px;
  padding: 0px 8px;

  display: grid;
  grid-template-columns: auto auto;
  column-gap: 8px;
`;

const InfoRow = styled(SimpleCard)`
  padding: 4px 8px;
`;

const App = () => {
  return (
    <React.Fragment>
      <GraphicsApp>
        <LogoArea>
          <Logo />
        </LogoArea>
        <VideoArea />
        <FirstPlayer>
          <RacePlayer index={0} />
        </FirstPlayer>
        <SecondVideoArea />
        <SecondPlayer>
          <RacePlayer index={1} />
        </SecondPlayer>
        <ThirdVideoArea />
        <ThirdPlayer>
          <RacePlayer index={2} />
        </ThirdPlayer>
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
}

ReactDOM.render(<App />, document.getElementById('root'));