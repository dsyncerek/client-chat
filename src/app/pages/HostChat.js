import React from 'react';
import Chat from '../components/Chat/Chat';
import useMessages from '../firebase/useMessages';
import mapMessagePosition from '../utils/mapMessagePosition';
import pushMessage from '../firebase/pushMessage';

const HostChat = ({ match }) => {
  const session = match.params.session;
  const messages = useMessages(session);

  return (
    <Chat
      messages={mapMessagePosition(messages, 'host')}
      onMessage={content => pushMessage(session, content, 'host')}
    />
  );
};

export default HostChat;
