import { clone } from 'lodash';
import React, { createContext, ReactNode, useEffect, useState } from 'react';
import { Message } from '../nodecg/generated';
import { BundleNodecgInstance } from '../nodecg/nodecg';

interface Replicants {
  message: Message;
  authorized: boolean;
}

const defaultValues: Replicants = {
  message: '',
  authorized: false,
};

export const ReplicantContext = createContext<Replicants>(defaultValues);

type Props = {
  children: ReactNode;
}

export const ReplicantProvider = ({ children }: Props) => {

  const [message, setMessage] = useState<Message>(defaultValues.message);
  const [authorized, setAuthorized] = useState<boolean>(defaultValues.authorized);

  useEffect(() => {
    (nodecg as BundleNodecgInstance).Replicant('message').on('change', (newVal) => {
      setMessage(clone(newVal));
    });
    (nodecg as BundleNodecgInstance).Replicant('twitchCredential').on('change', (newVal) => {
      setAuthorized(!!newVal);
    });
  }, [])

  return (
    <ReplicantContext.Provider value={{
      message,
      authorized,
    }}>
      { children }
    </ReplicantContext.Provider>
  );
}