import React from 'react';
import { Link } from 'react-router-dom';
import { Chat } from '../components/Chat';
import { Loader } from '../components/Loader';
import { StartChatForm } from '../components/StartChatForm';
import { useFirebase } from '../firebase/FirebaseContext';
import { MessageOwnerEnum } from '../models/MessageOwnerEnum';

export const ClientChat = () => {
  const firebase = useFirebase();
  const [session, setSession] = firebase.useSession();
  const [guest, loaded] = firebase.useGuest(session);

  if (session && !loaded) {
    return <Loader />;
  }

  return (
    <div className="container my-5">
      {!guest && (
        <StartChatForm onSend={async name => firebase.initChatGuest(name).then(session => setSession(session))} />
      )}

      {guest && (
        <Chat guest={guest} onSend={message => firebase.addMessage(guest.session, message, MessageOwnerEnum.Client)} />
      )}

      <div className="mt-1 text-right">
        <Link to="/host">Switch to Host view</Link>
      </div>
    </div>
  );
};
