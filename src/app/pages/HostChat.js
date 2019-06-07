import React from 'react';
import useMessages from '../firebase/useMessages';
import Chat from '../components/Chat/Chat';
import mapMessagePosition from '../utils/mapMessagePosition';
import pushMessage from '../firebase/pushMessage';
import ChatGrid from '../components/ChatGrid/ChatGrid';

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
