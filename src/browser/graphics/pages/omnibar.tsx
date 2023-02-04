import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import { ReplicantProvider } from '../../ReplicantProvider';
import { Omnibar } from '../components/Omnibar';
import { ScAdditionProvider } from '../providers/ScAdditionProvider';
import { SpeedcontrolProvider } from '../providers/SpeedcontrolProvider';
import { TweetProvider } from '../providers/TweetProvider';

const Container = styled.div`
  position: absolute;
  width: 1920px;
  height: 52px;
`;

const App = () => {

  return (
    <Container>
      <SpeedcontrolProvider>
        <ScAdditionProvider>
          <TweetProvider>
            <ReplicantProvider>
              <Omnibar></Omnibar>
            </ReplicantProvider>
          </TweetProvider>
        </ScAdditionProvider>
      </SpeedcontrolProvider>
    </Container>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));