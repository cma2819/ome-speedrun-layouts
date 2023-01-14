import React from 'react';
import styled from 'styled-components';
import { NameAndSocials } from './NameAndSocials';

type Props = {
  name: string;
  socials: {
    twitch?: string;
		nico?: string;
		youtube?: string;
		twitter?: string;
	};
};

const Container = styled.div`
  display: grid;
  grid-template-rows: 48px;
  grid-template-columns: 32px 1fr;
`;

const Icon = styled.i`
  padding: 0px 4px;
`;

const IconCell = styled.div`
  grid-row-start: 1;
  align-self: center;
  justify-self: center;
`;

const NameRow = styled.div`
  padding: 0px 16px;
  align-self: center;
  justify-self: center;
`;

export const CommentatorNameplate = ({ name, socials }: Props) => {
  return (
    <Container>
      <IconCell>
        <Icon className="fas fa-headset"></Icon>
      </IconCell>
      <NameRow>
        <NameAndSocials
          name={name}
          {...socials}
        />
      </NameRow>
    </Container>
  );
}