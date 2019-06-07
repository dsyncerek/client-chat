import { useEffect, useState } from 'react';
import { firestore } from './init';

export default () => {
  const [sessions, setSessions] = useState([]);

  useEffect(() => {
    const unsubscribe = firestore.collection('messages').onSnapshot(querySnapshot => {
      const newSessions = [];

      querySnapshot.forEach(snapshot => {
        newSessions.push(snapshot.id);
      });

      setSessions(newSessions);
    });

    return () => unsubscribe();
  }, []);

  return sessions;
};
