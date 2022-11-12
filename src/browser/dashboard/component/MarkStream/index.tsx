import { Button, Stack } from '@mui/material';
import React from 'react';
import { useContext } from 'react'
import { BundleNodecgInstance } from '../../../../nodecg/nodecg';
import { ReplicantContext } from '../../../ReplicantProvider'

export const MarkStream = () => {

  const bundleNodecg = nodecg as BundleNodecgInstance;
  const repAuthorized = useContext(ReplicantContext).authorized;

  return (
    <>
      { !repAuthorized && (
        <Button variant='contained' target='_blank' href='/ome-speedrun-layouts/auth/twitch/token'>
          Twitchログイン
        </Button>
      )}
      { repAuthorized && (
        <Stack spacing={2} direction='row'>
          <Button variant='contained' onClick={() => {
            bundleNodecg.sendMessage('twitch:mark');
          }}>マーカー設定</Button>
          <Button variant='contained' color='warning' onClick={() => {
            bundleNodecg.sendMessage('twitch:logout');
          }}>ログアウト</Button>
        </Stack>
      )}
    </>
  )
}