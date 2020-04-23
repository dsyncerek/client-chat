import React from 'react';
import { Link } from 'react-router-dom';
import { Chat } from '../components/Chat';
import { useFirebase } from '../firebase/FirebaseContext';
import { MessageOwnerEnum } from '../models/MessageOwnerEnum';
import { useSession } from '../session/SessionContext';

export const ClientChat = () => {
  const session = useSession();
  const firebase = useFirebase();
  const messages = firebase.useSessionMessages(session);
  const onSend = (content: string) => firebase.addMessage(session, content, MessageOwnerEnum.Client);

  return (
    <div className="container my-5">
      <Chat messages={messages} onSend={onSend} />

      <div className="mt-1 text-right">
        <Link to="/host">Switch to Host view</Link>
      </div>
    </div>
  );
};
