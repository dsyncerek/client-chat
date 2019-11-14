import { firestore } from 'firebase';

export enum MessageOwnerEnum {
  Client = 'client',
  Host = 'host',
}

export default interface Message {
  content: string;
  owner: MessageOwnerEnum;
  date: firestore.Timestamp;
}
