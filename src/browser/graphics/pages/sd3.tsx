import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import { GraphicsApp } from '../GraphicsApp';
import { Logo } from '../components/Logo';
import { RunParticipants } from '../components/RunParticipants';
import { Timer } from '../components/Timer';
import { RunDataLabel } from '../components/RunDataLabel';
import { RacePlayer } from '../components/RacePlayer';

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
  width: 640px;
  height: 482px;
  background-color: rgba(255, 255, 255, 0.6);
`;

const FirstPlayer = styled.div`
  position: absolute;
  top: 220px;
  left: 656px;
  width: 460px;
  height: 120px;
`;

const SecondVideoArea = styled.div`
  position: absolute;
  top: 16px;
  right: 16px;
  width: 640px;
  height: 482px;
  background-color: rgba(255, 255, 255, 0.6);
`;

const SecondPlayer = styled.div`
  position: absolute;
  top: 376px;
  right: 656px;
  width: 460px;
  height: 120px;
`;

const ThirdVideoArea = styled.div`
  position: absolute;
  bottom: 16px;
  left: 16px;
  width: 640px;
  height: 482px;
  background-color: rgba(255, 255, 255, 0.6);
`;

const ThirdPlayer = styled.div`
  position: absolute;
  top: 530px;
  left: 656px;
  width: 460px;
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
  left: 656px;
  width: 1260px;
  height: 160px;
  padding: 0px 8px;

  display: grid;
  grid-template-columns: auto auto;
`;

const InfoRow = styled.div`
  width: 100%;
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