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
  width: 640px;
  height: 482px;
  background-color: rgba(255, 255, 255, 0.6);
`;

const FirstPlayer = styled.div`
  position: absolute;
  top: 372px;
  left: 656px;
  width: 300px;
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
  top: 372px;
  right: 656px;
  width: 300px;
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
  width: 300px;
  height: 120px;
`;

const FourthVideoArea = styled.div`
  position: absolute;
  bottom: 16px;
  right: 16px;
  width: 640px;
  height: 482px;
  background-color: rgba(255, 255, 255, 0.6);
`;

const FourthPlayer = styled.div`
  position: absolute;
  top: 530px;
  right: 656px;
  width: 300px;
  height: 120px;
`;

const Participants = styled.div`
  position: absolute;
  top: 536px;
  left: 1264px;
  width: 640px;
  height: 320px;
`;

const InfoArea = styled(SimpleCard)`
  position: absolute;
  top: 168px;
  left: 656px;
  width: 590px;
  height: 160px;
  padding: 0px 8px;
/* 
  display: grid;
  grid-template-columns: auto auto;
  column-gap: 8px; */
`;

const TimerArea = styled(SimpleCard)`
  position: absolute;
  bottom: 128px;
  left: 682px;
  width: 532px;
  height: 128px;
  padding: 0px 8px;
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
        <FourthVideoArea />
        <FourthPlayer>
          <RacePlayer index={3} />
        </FourthPlayer>
        <Participants>
          <RunParticipants race />
        </Participants>
        <InfoArea>
          <RunDataLabel />
        </InfoArea>
        <TimerArea>
          <Timer />
        </TimerArea>
      </GraphicsApp>
    </React.Fragment>  
  );
}

ReactDOM.render(<App />, document.getElementById('root'));