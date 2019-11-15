import React, { useContext } from 'react';
import Chat from '../components/Chat';
import FirebaseContext from '../firebase/FirebaseContext';
import MessageOwnerEnum from '../models/MessageOwnerEnum';

const HostChat = () => {
  const firebase = useContext(FirebaseContext);
  const messages = firebase.useAllSessionsMessages();

  return (
    <div className="container my-4">
      <div className="row">
        {Object.keys(messages).map(session => (
          <div key={session} className="col-md-6 my-4">
            <Chat
              messages={messages[session]}
              onSend={content => firebase.addMessage(session, content, MessageOwnerEnum.Host)}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default HostChat;
