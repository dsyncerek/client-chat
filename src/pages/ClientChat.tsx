import React, { useContext } from 'react';
import Chat from '../components/Chat';
import FirebaseContext from '../firebase/FirebaseContext';
import MessageOwnerEnum from '../models/MessageOwnerEnum';
import SessionContext from '../session/SessionContext';

const ClientChat = () => {
  const session = useContext(SessionContext);
  const firebase = useContext(FirebaseContext);
  const messages = firebase.useSessionMessages(session);

  return (
    <div className="container my-5">
      <Chat messages={messages} onSend={content => firebase.addMessage(session, content, MessageOwnerEnum.Client)} />
    </div>
  );
};

export default ClientChat;
