import { Message } from './generated';

export type MessageMap = {
  'timekeeping:start': {
    result: boolean;
  },
  'timekeeping:pause': {
    result: boolean;
  },
  'timekeeping:resume': {
    result: boolean;
  },
  'timekeeping:finish': {
    result: boolean;
  },
  'message:set': {
    data: Message,
    result: boolean;
  },
  'message:get': {
    result: Message;
  },
};
