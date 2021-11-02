import { clone } from 'lodash';
import React, { createContext, ReactNode, useEffect, useState } from 'react';
import { Message } from '../nodecg/generated';
import { BundleNodecgInstance } from '../nodecg/nodecg';

interface Replicants {
  message: Message;
}

const defaultValues: Replicants = {
  message: '',
};

export const ReplicantContext = createContext<Replicants>(defaultValues);

type Props = {
  children: ReactNode;
}

export const ReplicantProvider = ({ children }: Props) => {

  const [message, setMessage] = useState<Message>(defaultValues.message);

  useEffect(() => {
    (nodecg as BundleNodecgInstance).Replicant('message').on('change', (newVal) => {
      setMessage(clone(newVal));
    });
  }, [])

  return (
    <ReplicantContext.Provider value={{
      message,
    }}>
      { children }
    </ReplicantContext.Provider>
  );
}