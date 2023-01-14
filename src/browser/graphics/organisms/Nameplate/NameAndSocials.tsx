import React, { useContext, useEffect, useState } from 'react';
import styled from 'styled-components';
import { FocusSocialContext } from '../../providers/FocusSocialProvider';

type ContainerProps = {
  entering: boolean;
  leaving: boolean;
};

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  transition: all 1s;
  opacity: ${({leaving, entering}: ContainerProps) =>
    leaving ? (entering ? '1' : '0') : '1'};
  transform: translateX(${({leaving, entering}: ContainerProps) =>
    leaving ? (entering ? '0' : '-10%') : '0'});
`;

const Icon = styled.i`
  padding: 0px 4px;
`;

const Display = styled.div``;

type Props = {
  name: string;
  twitch?: string;
  nico?: string;
  twitter?: string;
  youtube?: string;
};

export const NameAndSocials = ({ name, twitch, nico, twitter, youtube }: Props) => {

  const focusSocial = useContext(FocusSocialContext);
  const [ focus, setFocus ] = useState<typeof focusSocial>(focusSocial);
  const [ entering, setEntering ] = useState<boolean>(false);
  const [ leaving, setLeaving ] = useState<boolean>(false);

  useEffect(() => {
    setEntering(false);
    setLeaving(true);
    setTimeout(() => {
      setFocus(focusSocial);
      setTimeout(() => {
        setLeaving(false);
      }, 1000);
    }, 1000)
  }, [ focusSocial ]);

  return (
    <React.Fragment>
      {
        focus === 'name' && (
          <Container entering={entering} leaving={leaving}>
            <Display>{ name }</Display>
          </Container>
        )
      }
      {
        focus === 'twitch' && (
          <Container entering={entering} leaving={leaving}>
            {
              twitch ? (
                <>
                  <Icon className="fab fa-twitch"></Icon>
                  <Display>{ twitch }</Display>
                </>
              ) : (
                <Display>{ name }</Display>
              )
            }
          </Container>
        )
      }
      {
        focus === 'nico' && (
          <Container entering={entering} leaving={leaving}>
            {
              nico ? (
                <Display>{ nico }</Display>
              ) : (
                <Display>{ name }</Display>
              )
            }
          </Container>
        )
      }
      {
        focus === 'twitter' && twitter && (
          <Container entering={entering} leaving={leaving}>
            {
              twitter ? (
                <>
                  <Icon className="fab fa-twitter"></Icon>
                  <Display>{ twitter }</Display>
                </>
              ) : (
                <Display>{ name }</Display>
              )
            }
          </Container>
        )
      }
      {
        focus === 'youtube' && youtube && (
          <Container entering={entering} leaving={leaving}>
            {
              youtube ? (
                <>
                  <Icon className="fab fa-youtube"></Icon>
                  <Display>{ youtube }</Display>
                </>
              ) : (
                <Display>{ name }</Display>
              )
            }
          </Container>
        )
      }
    </React.Fragment>
  )
}