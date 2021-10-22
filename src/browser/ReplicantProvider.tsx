import { clone } from 'lodash';
import React, { createContext, ReactNode, useEffect, useState } from 'react';
import { Message, Timekeeping } from '../nodecg/generated';
import { BundleNodecgInstance } from '../nodecg/nodecg';

interface Replicants {
  timekeeping: Timekeeping;
  message: Message;
}

const defaultValues: Replicants = {
  timekeeping: {
    time: '00:00',
    status: 'finished',
  },
  message: '',
};

export const ReplicantContext = createContext<Replicants>(defaultValues);

type Props = {
  children: ReactNode;
}

export const ReplicantProvider = ({ children }: Props) => {

  const [timekeeping, setTimekeeping] = useState<Timekeeping>(defaultValues.timekeeping);
  const [message, setMessage] = useState<Message>(defaultValues.message);

  useEffect(() => {
    (nodecg as BundleNodecgInstance).Replicant('timekeeping').on('change', (newVal) => {
      setTimekeeping(clone(newVal));
    });
    (nodecg as BundleNodecgInstance).Replicant('message').on('change', (newVal) => {
      setMessage(clone(newVal));
    });
  }, [])

  return (
    <ReplicantContext.Provider value={{
      timekeeping,
      message,
    }}>
      { children }
    </ReplicantContext.Provider>
  );
}