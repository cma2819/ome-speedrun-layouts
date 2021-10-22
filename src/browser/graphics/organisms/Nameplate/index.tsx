import React from 'react';
import styled from 'styled-components';
import { SocialText } from './SocialText';
import { TimeText } from './TimeText';

type Props = {
  name: string;
  socials: {
    twitch?: string;
		nico?: string;
		youtube?: string;
		twitter?: string;
	};
  role: 'runner'|'commentator';
  time?: string;
};

const Container = styled.div`
  display: grid;
  grid-template-rows: 64px 2px 48px;
  grid-template-columns: 64px 1fr;
`;

const Icon = styled.i`
  padding: 0px 4px;
`;

const IconCell = styled.div`
  grid-row-start: 1;
  grid-row-end: 4;
  align-self: center;
  justify-self: center;
`;

const NameRow = styled.div`
  padding: 0px 16px;
  align-self: center;
  justify-self: center;
`;
const SocialRow = styled.div`
  padding: 0px 16px;
  display: grid;
  justify-content: space-between;
  grid-template-columns: auto auto;
`;

const NameText = styled.div`
  align-self: center;
`;

const Border = styled.div`
  background-color: white;
`;

const SocialArea = styled.div`
  align-self: center;
  font-size: 18px;
`;

const TimeArea = styled.div`
  color: #fcf951;
`;

export const Nameplate = ({ name, socials, role, time }: Props) => {
  return (
    <Container>
      <IconCell>
        { role === 'runner' && (
          <Icon className="fas fa-gamepad"></Icon>
        )}
        { role === 'commentator' && (
          <Icon className="fas fa-headset"></Icon>
        )}
      </IconCell>
      <NameRow>
        <NameText>
          { name }
        </NameText>
      </NameRow>
      <Border />
      <SocialRow>
        <TimeArea>
          <TimeText time={time} />
        </TimeArea>
        <SocialArea>
          <SocialText {... socials} />
        </SocialArea>
      </SocialRow>
    </Container>
  );
}