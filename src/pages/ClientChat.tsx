import React from 'react';
import { Chat } from '../components/Chat';
import { useFirebase } from '../firebase/FirebaseContext';
import { MessageOwnerEnum } from '../models/MessageOwnerEnum';
import { useSession } from '../session/SessionContext';

export const ClientChat = () => {
  const session = useSession();
  const firebase = useFirebase();
  const messages = firebase.useSessionMessages(session);

  return (
    <div className="container my-5">
      <Chat messages={messages} onSend={content => firebase.addMessage(session, content, MessageOwnerEnum.Client)} />
    </div>
  );
};
