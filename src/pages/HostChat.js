import React from 'react';
import Chat from '../components/Chat/Chat';
import ChatGrid from '../components/ChatGrid/ChatGrid';
import pushMessage from '../firebase/pushMessage';
import useMessages from '../firebase/useMessages';
import mapMessagePosition from '../utils/mapMessagePosition';

const HostChat = () => {
  const messages = useMessages();

  return (
    <ChatGrid>
      {Object.keys(messages).map(session => (
        <Chat
          messages={mapMessagePosition(messages[session], 'host')}
          onMessage={content => pushMessage(session, content, 'host')}
        />
      ))}
    </ChatGrid>
  );
};

export default HostChat;
