import { firestore } from 'firebase';
import { MessageOwnerEnum } from './MessageOwnerEnum';

export interface Message {
  content: string;
  owner: MessageOwnerEnum;
  date: firestore.Timestamp;
}
