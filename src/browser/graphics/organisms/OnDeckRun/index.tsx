import React from 'react';
import styled from 'styled-components';
import { SimpleNameplate } from '../Nameplate/SimpleNamePlate';

type Props = {
  game: string;
  category: string;
  runners: Array<string>;
  commentators: Array<string>;
  console: string;
  estimate: string;
  startAt?: string;
  small?: boolean;
  isNext?: boolean;
};

type SmallableProps = {
  small?: boolean;
}

const Container = styled.div`
  display: grid;
  grid-template-columns: 128px 2px 24px 1fr;
`;

const StartTime = styled.div`
  display: grid;
  align-content: space-around;
  justify-content: center;
`;

const Border = styled.div`
  background-color: white;
`;

const Padding = styled.div``;

const Games = styled.div``;

const Names = styled.div``;

const GameText = styled.div`
  font-size: ${({small}: SmallableProps) => !small ? '36px' : '24px'};
  font-weight: ${({small}: SmallableProps) => !small ? 'bold' : '24px'};
`;

const MiscText = styled.div``;

export const OnDeckRun = ({ game, category, runners, commentators, console, estimate, startAt, small, isNext }: Props) => {

  return (
    <Container>
      <StartTime>
        { isNext ? 'NEXT' : (startAt ? `${startAt} ～` : '-')}
      </StartTime>
      <Border />
      <Padding />
      <div>
        <Games>
          <GameText small={small}>
            {game}
          </GameText>
          {
            ((category !== '') && (console !== '') && (estimate !== '')) && (
              <MiscText>{category} / {console} / {estimate}</MiscText>
            )
          }
        </Games>
        <Names>
          <MiscText>
            {
              runners.length > 0 && (
                <SimpleNameplate name={runners.join(',')} role="runner" />
              )
            }
          </MiscText>
          <MiscText>
            {
              commentators.length > 0 && (
                <SimpleNameplate name={commentators.join(',')} role="commentator" />
              )
            }
          </MiscText>
        </Names>
      </div>
    </Container>
  );
}