import { useEffect, useState } from 'react';
import { firestore } from './init';

export default session => {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const unsubscribe = firestore.collection('messages').doc(session).onSnapshot(snapshot => {
      if (snapshot.data()) {
        setMessages(snapshot.data().messages);
      }
    });

    return () => unsubscribe();
  }, [session]);

  return messages;
};
