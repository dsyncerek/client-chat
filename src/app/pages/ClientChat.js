import React, { useContext } from 'react';
import Chat from '../components/Chat/Chat';
import useMessages from '../firebase/useMessages';
import mapMessagePosition from '../utils/mapMessagePosition';
import pushMessage from '../firebase/pushMessage';
import SessionContext from '../context/SessionContext';

const ClientChat = () => {
  const session = useContext(SessionContext);
  const messages = useMessages(session);

  return (
    <Chat
      messages={mapMessagePosition(messages, 'client')}
      onMessage={content => pushMessage(session, content, 'client')}
    />
  );
};

export default ClientChat;
