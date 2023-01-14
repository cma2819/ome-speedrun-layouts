import React from 'react';
import styled from 'styled-components'
import { NoCameraIcon } from '../../organisms/Icons/NoCameraIcon';

const Container = styled.div`
  border: 2px solid #bbbbbb;
  color: #bbbbbb;
  background-color: rgba(0, 0, 0, 0.6) ;
  height: 100%;
  width: 100%;
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  grid-template-rows: 1fr auto 1fr;
`;

export const CameraAlternative = () => {
  return (
    <Container>
      <div style={{
        gridColumn: '2 / 3',
        gridRow: '2 / 3',
      }}>
        <NoCameraIcon />
        NO INPUT
      </div>
    </Container>
  )
}