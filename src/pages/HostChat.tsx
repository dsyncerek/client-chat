import React from 'react';
import { Chat } from '../components/Chat';
import { Loader } from '../components/Loader';
import { useFirebase } from '../firebase/FirebaseContext';
import { MessageOwnerEnum } from '../models/MessageOwnerEnum';

export const HostChat = () => {
  const firebase = useFirebase();
  const [guests, loaded] = firebase.useAllChatGuests();

  if (!loaded) {
    return <Loader />;
  }

  return (
    <div className="container my-4">
      <div className="row">
        {guests.map(guest => (
          <div key={guest.session} className="col-md-6 my-4">
            <Chat
              guest={guest}
              onSend={content => firebase.addMessage(guest.session, content, MessageOwnerEnum.Host)}
            />
          </div>
        ))}
      </div>
    </div>
  );
};
