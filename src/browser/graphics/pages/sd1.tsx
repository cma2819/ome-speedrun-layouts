import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import { GraphicsApp } from '../GraphicsApp';
import { Logo } from '../components/Logo';
import { RunParticipants } from '../components/RunParticipants';
import { Timer } from '../components/Timer';
import { RunDataLabel } from '../components/RunDataLabel';
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
  left: 603px;
  width: 1285px;
  height: 964px;
  background-color: rgba(255, 255, 255, 0.6);
`;

const Participants = styled.div`
  position: absolute;
  top: 196px;
  left: 32px;
  width: 539px;
  height: 320px;
`;

const InfoArea = styled.div`
  position: absolute;
  top: 536px;
  left: 32px;
  width: 539px;
  height: 460px;
  padding: 0px 8px;

  display: grid;
  grid-template-rows: 1fr 1fr 1fr 1fr;
`;

const Margin = styled.div``;

const InfoRow = styled(SimpleCard)`
  padding: 8px 16px;
`;

const App = () => {
  return (
    <React.Fragment>
      <GraphicsApp>
        <LogoArea>
          <Logo />
        </LogoArea>
        <VideoArea />
        <Participants>
          <RunParticipants />
        </Participants>
        <InfoArea>
          <Margin />
          <InfoRow>
            <RunDataLabel />
          </InfoRow>
          <Margin />
          <InfoRow>
            <Timer />
          </InfoRow>
        </InfoArea>
      </GraphicsApp>
    </React.Fragment>  
  );
}

ReactDOM.render(<App />, document.getElementById('root'));