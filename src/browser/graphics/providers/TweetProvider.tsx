import React, { createContext, ReactNode, useEffect, useState } from 'react';
import { ActiveTweet } from '../../../nodecg/external/nodecg-twitter-widget/activeTweet';
import { TwitterWidgetInstance } from '../../../nodecg/twitter';
import clone from 'clone'

export const TweetContext = createContext<{
  isActive: boolean;
  activeTweet: ActiveTweet|null;
}>({
  isActive: false,
  activeTweet: null,
});

type Props = {
  children: ReactNode;
};

export const TweetProvider = ({ children }: Props) => {
  
  const [ isActive, setIsActive ] = useState<boolean>(false);
  const [ activeTweet, setActiveTweet ] = useState<ActiveTweet>(null);

  useEffect(() => {
    (nodecg as TwitterWidgetInstance).Replicant('activeTweet', 'nodecg-twitter-widget').on('change', (newVal) => {
      if (newVal !== null) {
        setActiveTweet(clone(newVal));
        setIsActive(true);
      } else {
        setIsActive(false);
        setTimeout(() => {
          setActiveTweet(null);
        }, 2000);
      }
    });
  }, []);

  return (
    <TweetContext.Provider value={{ isActive, activeTweet}}>
      { children }
    </TweetContext.Provider>
  );
}