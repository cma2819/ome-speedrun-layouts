import { Button } from '@mui/material';
import { Socket } from 'net';
import React, { useEffect, useState } from 'react';

type Props = {
  index: number;
  id: string;
}

const ls = new Socket();

export const Connection = ({ index, id }: Props) => {

  const [ state, setState ] = useState<'disconnected'|'connecting'|'connected'>('disconnected');

  useEffect(() => {
    ls.on('connect', () => {
      setState('connected');
    });
    
    ls.on('close', () => {
      setState('disconnected');
    })
  }, [])

  const attemptToConnect = () => {
    ls.connect(16834);
  }

  return (
    <div>
      {
        state === 'connected'
          ? (<></>)
          : (
            <>
              <Button
                variant='contained'
                onClick={attemptToConnect}
                disabled={state === 'connecting'}
              >
                走者{index}として連携する
              </Button>
            </>
          )
      }
    </div>
  )
}