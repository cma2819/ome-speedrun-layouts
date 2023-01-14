import React from 'react';
import styled from 'styled-components';

const Icon = styled.i`
  margin-right: 8px;
`;

export const NoCameraIcon = () => {
  return (
    <Icon className="fas fa-video"></Icon>
  );
}