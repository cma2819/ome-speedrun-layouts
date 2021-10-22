import { Asset } from './asset';
import { Message, Timekeeping } from './generated';

type ReplicantMap = {
  'assets:logo': Asset[];
  timekeeping: Timekeeping;
  message: Message;
};

export {
  Timekeeping,
  Message,
  ReplicantMap
};
