import { app, firestore, initializeApp } from 'firebase/app';
import 'firebase/firestore';
import { useEffect, useState } from 'react';
import { Guest } from '../models/Guest';
import { Message } from '../models/Message';
import { MessageOwnerEnum } from '../models/MessageOwnerEnum';
import { config } from './config';

export interface ChatGuestDocumentData {
  name: string;
  messages: Message[];
}

export class Firebase {
  private readonly app: app.App;
  private readonly firestore: firestore.Firestore;
  private readonly guestsCollection: firestore.CollectionReference<ChatGuestDocumentData>;
  private readonly storage: Storage = localStorage;
  public static readonly sessionStorageKey: string = 'session';

  constructor() {
    this.app = initializeApp(config);
    this.firestore = firestore(this.app);
    this.guestsCollection = this.firestore.collection(`chatGuests`) as firestore.CollectionReference<
      ChatGuestDocumentData
    >;
  }

  public async initChatGuest(name: string): Promise<string> {
    const { id } = await this.guestsCollection.add({ name, messages: [] });
    this.storage.setItem(Firebase.sessionStorageKey, id);
    return id;
  }

  public addMessage(session: string, content: string, owner: MessageOwnerEnum): void {
    const message: Message = { content, owner, date: firestore.Timestamp.now() };
    const document = this.guestsCollection.doc(session);

    document.update({ messages: firestore.FieldValue.arrayUnion(message) });
  }

  public useSession() {
    const fromStorage = this.storage.getItem(Firebase.sessionStorageKey);
    return useState<string | null>(fromStorage);
  }

  public useGuest(session: string | null): [Guest | null, boolean] {
    const [guest, setGuest] = useState<Guest | null>(null);
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
      if (session) {
        const unsubscribe = this.guestsCollection.doc(session).onSnapshot(snapshot => {
          const data = snapshot.data();

          if (data) {
            setGuest({ ...data, session, messages: this.sortMessages(data.messages) });
            setLoaded(true);
          } else {
            setLoaded(true);
          }
        });

        return () => unsubscribe();
      }
    }, [session]);

    return [guest, loaded];
  }

  public useAllChatGuests(): [Guest[], boolean] {
    const [guests, setGuests] = useState<Guest[]>([]);
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
      const unsubscribe = this.guestsCollection.onSnapshot(querySnapshot => {
        const newGuests: Guest[] = [];

        querySnapshot.forEach(snapshot => {
          const data = snapshot.data();

          if (data) {
            newGuests.push({ ...data, session: snapshot.id, messages: this.sortMessages(data.messages) });
          }
        });

        setGuests(newGuests);
        setLoaded(true);
      });

      return () => unsubscribe();
    }, []);

    return [guests, loaded];
  }

  private sortMessages(messages: Message[]): Message[] {
    return messages.sort((m1, m2) => m1.date.seconds - m2.date.seconds);
  }
}
