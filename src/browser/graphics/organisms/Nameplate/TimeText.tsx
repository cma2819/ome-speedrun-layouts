import React from 'react';
import styled, { keyframes } from 'styled-components';

type Props = {
  time?: string;
};

const Container = styled.div``;

const showAnimation = keyframes`
  0% {
    transform: translateY(-50%);
    opacity: 0;
  }

  100% {
    transform: translateY(0%);
    opacity: 1;
  }
`;

const Time = styled.div`
  animation: ${showAnimation} 1s ease-out;
`;

export const TimeText = ({ time }: Props) => {
  return (
    <Container>
      {
        time && (
          <Time>{ time }</Time>
        )
      }
    </Container>
  );
}