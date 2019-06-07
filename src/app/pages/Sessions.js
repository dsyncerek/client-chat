import React from 'react';
import SessionList from '../components/SessionList/SessionList';
import useSessions from '../firebase/useSessions';

const Sessions = () => {
  const sessions = useSessions();

  return (
    <SessionList sessions={sessions} />
  );
};

export default Sessions;
