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
  left: 800px;
  height: 160px;
  width: 320px;
  filter: drop-shadow(0 0 8px #222222);
`;

const VideoArea = styled.div`
  position: absolute;
  top: 180px;
  left: 16px;
  width: 920px;
  height: 517px;
  background-color: rgba(255, 255, 255, 0.6);
`;

const FirstPlayer = styled.div`
  position: absolute;
  top: 716px;
  right: 982px;
  width: 460px;
  height: 120px;
`;

const SecondVideoArea = styled.div`
  position: absolute;
  top: 180px;
  right: 16px;
  width: 920px;
  height: 517px;
  background-color: rgba(255, 255, 255, 0.6);
`;

const SecondPlayer = styled.div`
  position: absolute;
  top: 716px;
  left: 982px;
  width: 460px;
  height: 120px;
`;

const InfoArea = styled.div`
  position: absolute;
  top: 856px;
  left: 16px;
  width: 1888px;
  height: 150px;
  padding: 8px 0;

  display: grid;
  grid-template-columns: auto auto auto;
  column-gap: 8px;
`;

const InfoRow = styled(SimpleCard)`
  padding: 4px 8px;
`;

const Participants = styled.div``;

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
        <InfoArea>
          <InfoRow>
            <RunDataLabel />
          </InfoRow>
          <Participants>
            <RunParticipants race />
          </Participants>
          <InfoRow>
            <Timer />
          </InfoRow>
        </InfoArea>
      </GraphicsApp>
    </React.Fragment>  
  );
}

ReactDOM.render(<App />, document.getElementById('root'));