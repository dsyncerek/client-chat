import { Message } from './Message';

export interface Guest {
  session: string;
  name: string;
  messages: Message[];
}
