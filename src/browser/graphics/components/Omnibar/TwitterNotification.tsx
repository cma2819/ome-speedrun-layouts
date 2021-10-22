import React from 'react';
import styled, { keyframes } from 'styled-components';
import { ActiveTweet } from '../../../../nodecg/external/nodecg-twitter-widget/activeTweet';

type Props = {
  tweet: ActiveTweet;
}

const Container = styled.div`
  display: grid;
  grid-template-columns: auto 24px 1fr;
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

const TweetText = styled.div`
  animation: ${enter} 1000ms;
  animation-delay: 1000ms;
  animation-fill-mode: forwards;
  transform: translateX(24px);
  opacity: 0;
  white-space: nowrap;
  overflow-x: hidden;
  text-overflow: ellipsis;
`;

export const TwitterNotification = ({ tweet }: Props) => {

  return (
    <Container>
      <div>
        <Icon className="fab fa-twitter" />
        { tweet?.screenName }
      </div>
      <div></div>
      <TweetText>
        { tweet?.text}
      </TweetText>
    </Container>
  );
}