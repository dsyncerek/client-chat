import { useEffect, useState } from 'react';
import { db as firebase } from './init';

export default session => {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    firebase.ref(`messages_${session}`).on('value', snapshot => {
      if (snapshot.val()) {
        setMessages(Object.values(snapshot.val()));
      }
    });
  }, [session]);

  return messages;
};
