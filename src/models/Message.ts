import { firestore } from 'firebase';
import MessageOwnerEnum from './MessageOwnerEnum';

interface Message {
  content: string;
  owner: MessageOwnerEnum;
  date: firestore.Timestamp;
}

export default Message;
