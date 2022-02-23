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
  left: 688px;
  width: 1200px;
  height: 720px;
  background-color: rgba(255, 255, 255, 0.6);
`;

const SecondVideoArea = styled.div`
  position: absolute;
  top: 528px;
  left: 32px;
  width: 624px;
  height: 468px;
  background-color: rgba(255, 255, 255, 0.6);
`;

const Participants = styled.div`
  position: absolute;
  top: 196px;
  left: 32px;
  width: 624px;
  height: 308px;
`;

const InfoArea = styled.div`
  position: absolute;
  top: 764px;
  left: 688px;
  width: 1200px;
  height: 250px;
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

const App = () => {
  return (
    <React.Fragment>
      <GraphicsApp>
        <LogoArea>
          <Logo />
        </LogoArea>
        <VideoArea />
        <SecondVideoArea />
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