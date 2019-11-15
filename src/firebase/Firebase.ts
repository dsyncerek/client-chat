import { app, firestore, initializeApp } from 'firebase/app';
import 'firebase/firestore';
import { useEffect, useState } from 'react';
import Dictionary from '../models/Dictionary';
import Message from '../models/Message';
import MessageOwnerEnum from '../models/MessageOwnerEnum';
import config from './config';

class Firebase {
  private readonly app: app.App;
  private readonly firestore: firestore.Firestore;
  private readonly messagesCollection: firestore.CollectionReference;

  constructor() {
    this.app = initializeApp(config);
    this.firestore = firestore(this.app);
    this.messagesCollection = this.firestore.collection(`messages`);
  }

  public addMessage(session: string, content: string, owner: MessageOwnerEnum): void {
    const message: Message = { content, owner, date: firestore.Timestamp.now() };
    const document = this.messagesCollection.doc(session);

    document
      .update({ messages: firestore.FieldValue.arrayUnion(message) })
      .catch(() => document.set({ messages: [message] }));
  }

  public useSessionMessages(session: string): Message[] {
    const [messages, setMessages] = useState<Message[]>([]);

    useEffect(() => {
      const document = this.messagesCollection.doc(session);

      const unsubscribe = document.onSnapshot(snapshot => {
        const data = snapshot.data();

        if (data) {
          setMessages(data.messages);
        }
      });

      return () => unsubscribe();
    }, [session]);

    return messages;
  }

  public useAllSessionsMessages(): Dictionary<Message[]> {
    const [messages, setMessages] = useState<Dictionary<Message[]>>({});

    useEffect(() => {
      const unsubscribe = this.messagesCollection.onSnapshot(querySnapshot => {
        const newMessages: Dictionary<Message[]> = {};

        querySnapshot.forEach(snapshot => {
          const data = snapshot.data();

          if (data) {
            newMessages[snapshot.id] = data.messages;
          }
        });

        setMessages(newMessages);
      });

      return () => unsubscribe();
    }, []);

    return messages;
  }
}

export default Firebase;
