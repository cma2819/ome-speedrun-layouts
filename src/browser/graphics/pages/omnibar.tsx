import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import { ReplicantProvider } from '../../ReplicantProvider';
import { Omnibar } from '../components/Omnibar';
import { GraphicsApp } from '../GraphicsApp';
import { TweetProvider } from '../providers/TweetProvider';

const Container = styled.div`
  position: absolute;
  width: 1920px;
  height: 52px;
`;

const App = () => {

  return (
    <Container>
      <GraphicsApp>
        <TweetProvider>
          <ReplicantProvider>
            <Omnibar></Omnibar>
          </ReplicantProvider>
        </TweetProvider>
      </GraphicsApp>
    </Container>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));