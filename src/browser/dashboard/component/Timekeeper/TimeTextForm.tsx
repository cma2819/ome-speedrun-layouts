import { TextField } from '@mui/material';
import React from 'react';

type Props = {
  time: string;
}

export const TimeTextForm = ({ time }: Props) => {
  return (
    <TextField
      fullWidth
      InputProps={{
        readOnly: true
      }}
      value={time}
    />
  )
}