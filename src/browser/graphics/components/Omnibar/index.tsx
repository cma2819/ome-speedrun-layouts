import '../../common.css';

import React from 'react';
import styled from 'styled-components';
import { CurrentTime } from './CurrentTime';
import { BarContent } from './BarContent';

const Container = styled.div`
  display: grid;
  width: 100%;
  height: 100%;
  grid-template-columns: 1fr 180px;
  column-gap: 8px;
  align-items: center;
  background-color: #333333;
`;

const ContentColumn = styled.div`
  font-size: 24px;
`;
const TimeColumn = styled.div`
  font-family: 'Source Code Pro';
  font-size: 36px;
  justify-self: center;
`;

export const Omnibar = () => {
  return (
    <Container>
      <ContentColumn>
        <BarContent></BarContent>
      </ContentColumn>
      <TimeColumn>
        <CurrentTime></CurrentTime>
      </TimeColumn>
    </Container>
  );
}