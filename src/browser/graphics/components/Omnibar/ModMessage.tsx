import React from 'react';
import styled, { keyframes } from 'styled-components';

type Props = {
  message: string;
}

const Container = styled.div`
  display: grid;
  grid-template-columns: auto 24px 1fr;
  align-items: center;
`;

const Icon = styled.i`
  padding: 0px 4px;
`;

const enter = keyframes`
  from {
    transform: translateX(24px);
    opacity: 0;
  }

  to {
    transform: translateX(0px);
    opacity: 1;
  }
`;

const MessageLabel = styled.div``;

const MessageText = styled.div`
  animation: ${enter} 1000ms;
  animation-delay: 1000ms;
  animation-fill-mode: forwards;
  transform: translateX(24px);
  opacity: 0;
  white-space: nowrap;
  overflow-x: hidden;
  text-overflow: ellipsis;
`;

export const ModMessage = ({ message }: Props) => {

  return (
    <Container>
      <MessageLabel>
        <Icon className="fas fa-bullhorn" />
      </MessageLabel>
      <div></div>
      <MessageText>
        { message }
      </MessageText>
    </Container>
  );
}