import './common.css';
import '@fortawesome/fontawesome-free/js/all.js';

import React, { ReactNode } from 'react';
import { SpeedcontrolProvider } from './providers/SpeedcontrolProvider';
import { ScAdditionProvider } from './providers/ScAdditionProvider';
import { CommentatorProvider } from './providers/CommentatorProvider';
import { FocusSocialProvider } from './providers/FocusSocialProvider';
import { ClippedBackground, RectPath } from './components/ClippedBackground';

type Props = {
  clipPath?: RectPath[];
  hiddenOnNoInput?: boolean;
  children: ReactNode;
};

export const GraphicsApp = ({ clipPath, hiddenOnNoInput, children }: Props) => {

  return (
    <SpeedcontrolProvider>
      <ScAdditionProvider>
        <CommentatorProvider>
          <FocusSocialProvider>
            <ClippedBackground clipPath={clipPath} hiddenOnNoInput={hiddenOnNoInput} />
            { children }
          </FocusSocialProvider>
        </CommentatorProvider>
      </ScAdditionProvider>
    </SpeedcontrolProvider>
  );
}
