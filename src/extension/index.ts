import { message } from './message';
import { NodeCG } from './nodecg';
import { timekeeper } from './timekeeper';

export = (nodecg: NodeCG): void => {
  timekeeper(nodecg);
  message(nodecg);
}