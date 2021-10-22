import { Grid } from '@mui/material';
import React, { useContext } from 'react';
import { ReplicantContext } from '../../../ReplicantProvider';
import { TimekeepingControl } from './TimekeepingControl';
import { TimeTextForm } from './TimeTextForm';

export const Timekeeper = () => {

  const replicant = useContext(ReplicantContext);

  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <TimeTextForm time={replicant.timekeeping.time} />
      </Grid>
      <Grid item xs={12}>
        <TimekeepingControl status={replicant.timekeeping.status} />
      </Grid>
    </Grid>
  );
}