import firebase from 'firebase/app';
import { MessageOwnerEnum } from './MessageOwnerEnum';

export interface Message {
  content: string;
  owner: MessageOwnerEnum;
  date: firebase.firestore.Timestamp;
}
