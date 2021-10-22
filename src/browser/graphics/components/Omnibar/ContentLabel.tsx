import React from 'react';
import styled from 'styled-components';

type Props = {
  iconClass: string;
  text: string;
};

const Container = styled.div``;

const Label = styled.div``;

const Icon = styled.i`
  padding: 0px 8px;
`;

export const ContentLabel = ({ iconClass, text }: Props) => {
  return (
    <Container>
      <Label>
        <Icon className={iconClass} />
        { text }
        <Icon className={iconClass} />
      </Label>
    </Container>
  );
}