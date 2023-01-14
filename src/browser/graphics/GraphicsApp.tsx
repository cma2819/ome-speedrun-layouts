import './common.css';
import '@fortawesome/fontawesome-free/js/all.js';

import React, { ReactNode } from 'react';
import { SpeedcontrolProvider } from './providers/SpeedcontrolProvider';
import { ScAdditionProvider } from './providers/ScAdditionProvider';
import { CommentatorProvider } from './providers/CommentatorProvider';
import { FocusSocialProvider } from './providers/FocusSocialProvider';
import { ClippedBackground, RectPath } from './components/ClippedBackground';
import { CameraAlternative } from './components/CameraAlternative';

type Props = {
  clipPath?: RectPath[];
  children: ReactNode;
};

export const GraphicsApp = ({ clipPath, children }: Props) => {

  return (
    <SpeedcontrolProvider>
      <ScAdditionProvider>
        <CommentatorProvider>
          <FocusSocialProvider>
            <ClippedBackground clipPath={clipPath} />
            { children }
          </FocusSocialProvider>
        </CommentatorProvider>
      </ScAdditionProvider>
    </SpeedcontrolProvider>
  );
}
