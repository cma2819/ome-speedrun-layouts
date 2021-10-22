import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { BundleNodecgInstance } from '../../../../nodecg/nodecg';

const Container = styled.div`
  height: 100%;
  width: 100%;
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
  opacity: 0.9;
`;

export const Logo = () => {
  
  const [logoUri, setLogoUri] = useState<string|null>(null);
  
  useEffect(() => {
    (nodecg as BundleNodecgInstance).Replicant('assets:logo').on('change', (newVal) => {
      if (newVal.length > 0) {
        setLogoUri(newVal[0].url || null);
      }
    });
  }, []);

  return (
    <Container style={
      {
        backgroundImage: `url(${logoUri})`,
      }
    } />
  );
}