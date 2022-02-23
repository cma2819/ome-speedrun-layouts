import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  border: 2px solid #dddddd;
  background-color: rgba(51, 51, 51, 0.95);
`;

export const SimpleCard: React.VFC = (props) => {
  return (
    <Container {...props}>
    </Container>
  );
}