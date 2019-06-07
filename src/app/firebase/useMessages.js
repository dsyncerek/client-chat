import { useEffect, useState } from 'react';
import { firestore } from './init';

const getMessagesFromSnapshot = snapshot => {
  const data = snapshot.data();
  return data ? data.messages : [];
};

export default session => {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const messagesRef = firestore.collection('messages');

    let unsubscribe;

    if (session) {
      unsubscribe = messagesRef.doc(session).onSnapshot(snapshot => {
        setMessages(getMessagesFromSnapshot(snapshot));
      });
    } else {
      unsubscribe = messagesRef.onSnapshot(querySnapshot => {
        const newMessages = {};

        querySnapshot.forEach(snapshot => {
          newMessages[snapshot.id] = getMessagesFromSnapshot(snapshot);
        });

        setMessages(newMessages);
      });
    }

    return () => unsubscribe();
  }, [session]);

  return messages;
};
