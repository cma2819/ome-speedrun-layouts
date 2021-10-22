import { Button, Grid, TextField } from '@mui/material';
import React, { useContext, useEffect, useState } from 'react';
import { Message } from '../../../../nodecg/generated';
import { BundleNodecgInstance } from '../../../../nodecg/nodecg';
import { ReplicantContext } from '../../../ReplicantProvider';

export const MessageControl = () => {

  const repMessage = useContext(ReplicantContext).message;
  const [message, setMessage] = useState<Message>('');

  useEffect(() => {
    setMessage(repMessage);
  }, [repMessage]);

  const sendSetMessage = () => {
    (nodecg as BundleNodecgInstance).sendMessage('message:set', message);
  }

  const messageEdited = (): boolean => {
    return (message !== repMessage);
  }

  return (
    <Grid container spacing={2} alignItems="center">
      <Grid item xs={9}>
        <TextField
          fullWidth
          value={message}
          onChange={(e) => {setMessage(e.target.value)}}
          inputProps={{
            maxLength: 100
          }}
        />
      </Grid>
      <Grid item xs={3}>
        <Button
          color="primary"
          variant="contained"
          onClick={sendSetMessage}
          disabled={!messageEdited()}
        >
          設定
        </Button>
      </Grid>
    </Grid>
  );
}