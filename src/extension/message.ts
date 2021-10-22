import { NodeCG } from './nodecg';

export const message = (nodecg: NodeCG): void => {
  const messageRep = nodecg.Replicant('message', {
    defaultValue: ''
  });

  nodecg.listenFor('message:get', (_, cb) => {
    if (cb && cb.handled) {
      return;
    }
    cb && cb(null, messageRep.value);
  });

  nodecg.listenFor('message:set', (newMessage, cb) => {
    if (cb && cb.handled) {
      return;
    }
    messageRep.value = newMessage;

    cb && cb(null, true);
  })
}