import React from 'react';
import { Chat } from '../components/Chat';
import { useFirebase } from '../firebase/FirebaseContext';
import { MessageOwnerEnum } from '../models/MessageOwnerEnum';

export const HostChat = () => {
  const firebase = useFirebase();
  const messages = firebase.useAllSessionsMessages();
  const onSend = (session: string, content: string) => firebase.addMessage(session, content, MessageOwnerEnum.Host);

  return (
    <div className="container my-4">
      <div className="row">
        {Object.keys(messages).map(session => (
          <div key={session} className="col-md-6 my-4">
            <Chat messages={messages[session]} onSend={content => onSend(session, content)} />
          </div>
        ))}
      </div>
    </div>
  );
};
