import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { BundleNodecgInstance } from '../../../../nodecg/nodecg';

const Container = styled.div`
  border: 2px solid #bbbbbb;
  background-color: rgba(51, 51, 51, 0.95);
  height: 100%;
  width: 100%;
`;

export const SponsorLogo = () => {

  const [imagePath, setImagePath] = useState<string>('');

  useEffect(() => {
    (nodecg as BundleNodecgInstance).readReplicant('assets:sponsor-logo', (assets) => {
      const [logo] = assets;
      if (logo) {
        setImagePath(logo.url);
      }
    })
  })

  return (
    <Container>
      <div style={{
        width: '100%',
        height: '100%',
        backgroundImage: `url(${imagePath})`,
        backgroundSize: 'contain',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: '50% 50%',
      }}
      />
    </Container>
  )
}