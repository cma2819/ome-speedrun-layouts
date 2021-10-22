import { NodeCG } from './nodecg';
import { Timekeeper } from './lib/Timekeeper';

export const timekeeper = (nodecg: NodeCG): void => {

  const timekeepingRep = nodecg.Replicant('timekeeping', {
    defaultValue: {
      time: '00:00',
      status: 'finished'
    }
  });

  const timekeeper = new Timekeeper;

  const tick = () => {
    const time = timekeeper.currentTime;
    const status = timekeeper.status;

    timekeepingRep.value = {time, status};
  }

  setInterval(tick, 100);

  nodecg.listenFor('timekeeping:start', (_, cb) => {
    if (cb && cb.handled) {
      return;
    }
    timekeeper.start();
    cb && cb(null, true);
  });

  nodecg.listenFor('timekeeping:pause', (_, cb) => {
    if (cb && cb.handled) {
      return;
    }
    timekeeper.pause();
    cb && cb(null, true);
  });

  nodecg.listenFor('timekeeping:resume', (_, cb) => {
    if (cb && cb.handled) {
      return;
    }
    timekeeper.resume();
    cb && cb(null, true);
  });

  nodecg.listenFor('timekeeping:finish', (_, cb) => {
    if (cb && cb.handled) {
      return;
    }
    timekeeper.finish();
    cb && cb(null, true);
  });
}