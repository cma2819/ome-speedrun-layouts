import { Grid } from '@mui/material'
import React from 'react'
import ReactDOM from 'react-dom';
import { ReplicantProvider } from '../../ReplicantProvider'
import { Timekeeper } from '../component/Timekeeper';
import { DashboardThemeProvider } from '../DashboardThemeProvider'

const App = () => {
  return (
    <DashboardThemeProvider>
      <ReplicantProvider>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Timekeeper />
          </Grid>
        </Grid>
      </ReplicantProvider>
    </DashboardThemeProvider>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));