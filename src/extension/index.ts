import { message } from './message';
import { NodeCG } from './nodecg';
import { twitch } from './twitch';

export = (nodecg: NodeCG): void => {
  message(nodecg);
  twitch(nodecg);
}