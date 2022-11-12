import React from 'react'
import ReactDOM from 'react-dom';
import { Grid } from '@mui/material'
import { ReplicantProvider } from '../../ReplicantProvider'
import { DashboardThemeProvider } from '../DashboardThemeProvider'
import { MarkStream } from '../component/MarkStream';

const App = () => {
  return (
    <DashboardThemeProvider>
      <ReplicantProvider>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <MarkStream />
          </Grid>
        </Grid>
      </ReplicantProvider>
    </DashboardThemeProvider>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));