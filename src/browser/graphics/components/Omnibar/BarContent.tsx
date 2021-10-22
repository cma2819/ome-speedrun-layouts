import React, { useContext, useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { SwitchTransition, CSSTransition } from 'react-transition-group'
import { ScAdditionContext } from '../../providers/ScAdditionProvider';
import { SpeedcontrolContext } from '../../providers/SpeedcontrolProvider';
import { NextSchedule } from './NextSchedule';
import './fade.css';
import { TweetContext } from '../../providers/TweetProvider';
import { TwitterNotification } from './TwitterNotification';
import { ReplicantContext } from '../../../ReplicantProvider';
import { ModMessage } from './ModMessage';

const Container = styled.div`
  width: 100%;
  height: 100%;
`;

const MessageArea = styled.div`
  text-align: center;
`;

const TwitterArea = styled.div`
  padding: 0px 16px;
`;

const ModMessageArea = styled.div`
  padding: 0px 16px;
`;

const scenes = ['hashtag', 'message', 'next'];

export const BarContent = () => {

  const speedcontrol = useContext(SpeedcontrolContext);
  const scAdditions = useContext(ScAdditionContext);
  const twitter = useContext(TweetContext);
  const message = useContext(ReplicantContext).message;

  const nextRun = speedcontrol.runDataArray.find((_, index) => index === scAdditions.speedcontrolCurrentRunIndex + 1);

  const [scene, setScene] = useState<typeof scenes[number]>('hashtag');
  const sceneRef = useRef(scene);

  useEffect(() => {
    sceneRef.current = scene;
  }, [scene]);

  useEffect(() => {
    const nextScene = (current: number): string => {
      const next = (current + 1) % scenes.length;
  
      switch (scenes[next]) {
      case 'hashtag':
        return scenes[next];
      case 'message':
        if (message.length === 0) {
          return nextScene(next);
        }
        return scenes[next];
      case 'next':
        if (!nextRun) {
          return nextScene(next);
        }
        return scenes[next];
      default:
        return 'hashtag';
      }
    }

    const interval = setInterval(() => {
      const current = Math.max(scenes.indexOf(sceneRef.current), 0);
      setScene(nextScene(current));
    }, 60 * 1000);

    return () => {
      clearInterval(interval);
    };
  }, [message, nextRun])

  return (
    <Container>

      <SwitchTransition mode="out-in">
        <CSSTransition
          key={twitter.isActive ? 'active' : 'none'}
          addEndListener={(node, done) => node.addEventListener('transitionend', done, false)}
          classNames="fade"
        >
          <React.Fragment>
            {
              twitter.isActive && (
                <TwitterArea>
                  <TwitterNotification tweet={twitter.activeTweet} />
                </TwitterArea>
              )
            }
            {
              !twitter.isActive && (
                <div>
                  <SwitchTransition mode="out-in">
                    <CSSTransition
                      key={scene}
                      addEndListener={(node, done) => node.addEventListener('transitionend', done, false)}
                      classNames="fade"
                    >
                      <React.Fragment>
                        {
                          (scene === 'hashtag') && (
                            <MessageArea>#OMESpeedrun</MessageArea>
                          )
                        }
                        {
                          (scene === 'message') && (
                            <ModMessageArea>
                              <ModMessage message={message} />
                            </ModMessageArea>
                          )
                        }
                        {
                          (scene === 'next' && nextRun) && (
                            <NextSchedule nextRun={nextRun} />
                          )
                        }
                      </React.Fragment>
                    </CSSTransition>
                  </SwitchTransition>
                </div>
              )
            }
          </React.Fragment>
        </CSSTransition>
      </SwitchTransition>

    </Container>
  );
}