import './common.css';
import '@fortawesome/fontawesome-free/js/all.js';

import React, { ReactNode } from 'react';
import { SpeedcontrolProvider } from './providers/SpeedcontrolProvider';
import { ScAdditionProvider } from './providers/ScAdditionProvider';
import { CommentatorProvider } from './providers/CommentatorProvider';
import { FocusSocialProvider } from './providers/FocusSocialProvider';

type Props = {
  children: ReactNode
};

export const GraphicsApp = ({ children }: Props) => {

  return (
    <SpeedcontrolProvider>
      <ScAdditionProvider>
        <CommentatorProvider>
          <FocusSocialProvider>
            { children }
          </FocusSocialProvider>
        </CommentatorProvider>
      </ScAdditionProvider>
    </SpeedcontrolProvider>
  );
}
