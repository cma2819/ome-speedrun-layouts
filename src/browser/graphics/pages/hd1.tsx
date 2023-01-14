import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import { GraphicsApp } from '../GraphicsApp';
import { Logo } from '../components/Logo';
import { RunParticipants } from '../components/RunParticipants';
import { RunDataLabel } from '../components/RunDataLabel';
import { Timer } from '../components/Timer';
import { SimpleCard } from '../organisms/SimpleCard';
import { SponsorLogo } from '../components/SponsorLogo';
import { BundleNodecgInstance } from '../../../nodecg/nodecg';

const sponsored = (nodecg as BundleNodecgInstance).bundleConfig.sponsored;

const clipPath = { x: 32, y: 196, w: 400, h: 225};

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
  left: 458px;
  width: 1420px;
  height: 799px;
  background-color: rgba(255, 255, 255, 0.6);
`;

const Participants = styled.div`
  position: absolute;
  top: 437px;
  left: 32px;
  width: 404px;
  height: 580px;
  display: grid;
  grid-template-rows: 1fr minmax(auto, 1fr);
  grid-gap: 16px;
`;

const InfoArea = styled.div`
  position: absolute;
  top: 856px;
  left: 458px;
  width: 1420px;
  height: 158px;
  padding: 8px 0;
  display: grid;
  grid-template-columns: 2fr minmax(auto, 1fr);
  column-gap: 8px;
`;

const InfoRow = styled(SimpleCard)`
  padding: 4px 8px;
`;

const App = () => {
  return (
    <React.Fragment>
      <GraphicsApp clipPath={[clipPath]}>
        <LogoArea>
          <Logo />
        </LogoArea>
        <VideoArea />
        <Participants>
          <RunParticipants />
          {
            sponsored && (
              <SponsorLogo />
            )
          }
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