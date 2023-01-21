import React from 'react'
import ReactDOM from 'react-dom';
import { Grid } from '@mui/material'
import { ReplicantProvider } from '../../ReplicantProvider'
import { DashboardThemeProvider } from '../DashboardThemeProvider'
import { ConnectLivesplit } from '../component/ConnectLivesplit';
import { SpeedcontrolProvider } from '../../graphics/providers/SpeedcontrolProvider';
import { ScAdditionProvider } from '../../graphics/providers/ScAdditionProvider';

const App = () => {
  return (
    <DashboardThemeProvider>
      <SpeedcontrolProvider>
        <ScAdditionProvider>
          <ReplicantProvider>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <ConnectLivesplit />
              </Grid>
            </Grid>
          </ReplicantProvider>
        </ScAdditionProvider>
      </SpeedcontrolProvider>
    </DashboardThemeProvider>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));