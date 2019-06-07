import { useEffect, useState } from 'react';
import { firestore } from './init';

export default session => {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    let unsubscribe;

    if (session) {
      unsubscribe = firestore.collection('messages').doc(session).onSnapshot(snapshot => {
        if (snapshot.data()) {
          setMessages(snapshot.data().messages);
        }
      });
    } else {
      unsubscribe = firestore.collection('messages').onSnapshot(querySnapshot => {
        const newMessages = {};

        querySnapshot.forEach(snapshot => {
          newMessages[snapshot.id] = snapshot.data().messages;
        });

        setMessages(newMessages);
      });
    }

    return () => unsubscribe();
  }, [session]);

  return messages;
};
