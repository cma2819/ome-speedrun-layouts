import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import { GraphicsApp } from '../GraphicsApp';
import { SetupSchedules } from '../components/SetupSchedules';
import { SpotifyTrack } from '../components/SpotifyTrack';
import { Logo } from '../components/Logo';
import { SimpleCard } from '../organisms/SimpleCard';

const LogoArea = styled.div`
  position: absolute;
  top: 16px;
  left: 16px;
  height: 160px;
  width: 320px;
  filter: drop-shadow(0 0 8px #222222);
`;

const RunDeck = styled('div')`
  position: absolute;
  top: 180px;
  left: 80px;
  height: 620px;
  width: 1440px;
  filter: drop-shadow(0 0 16px #222222);
`;

const SpotifyTrackArea = styled(SimpleCard)`
  position: absolute;
  top: 920px;
  left: 80px;
  filter: drop-shadow(0 0 8px #222222);
  padding: 8px 16px;
`;

const App = () => {

  return (
    <React.Fragment>
      <GraphicsApp>
        <LogoArea>
          <Logo />
        </LogoArea>
        <RunDeck>
          <SetupSchedules/>
        </RunDeck>
        <SpotifyTrackArea>
          <SpotifyTrack />
        </SpotifyTrackArea>
      </GraphicsApp>
    </React.Fragment>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));