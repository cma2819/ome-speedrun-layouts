import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import { GraphicsApp } from '../GraphicsApp';
import { Logo } from '../components/Logo';
import { RunParticipants } from '../components/RunParticipants';
import { RunDataLabel } from '../components/RunDataLabel';
import { Timer } from '../components/Timer';
import { SimpleCard } from '../organisms/SimpleCard';

const LogoArea = styled.div`
  position: absolute;
  top: 16px;
  left: 16px;
  height: 160px;
  width: 320px;
  filter: drop-shadow(0 0 8px #222222);
`;

const VideoArea = styled.div`
  position: absolute;
  top: 32px;
  left: 749px;
  width: 1138px;
  height: 854px;
  background-color: rgba(255, 255, 255, 0.6);
`;

const CameraArea = styled.div`
  position: absolute;
  bottom: 32px;
  left: 32px;
  width: 699px;
  height: 393px;
  background-color: rgba(255, 255, 255, 0.6);
`;

const Participants = styled.div`
  position: absolute;
  top: 198px;
  left: 92px;
  width: 580px;
  height: 383px;
`;

const InfoArea = styled.div`
  position: absolute;
  top: 886px;
  left: 749px;
  width: 1138px;
  height: 128px;
  padding: 8px 0;

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
        <CameraArea />
        <Participants>
          <RunParticipants />
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