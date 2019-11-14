import React, { FC } from 'react';
import Message from '../models/Message';
import MessageList from './MessageList';
import SendMessageForm from './SendMessageForm';

type ChatProps = {
  messages?: Message[];
  onSend: (message: string) => void;
};

const Chat: FC<ChatProps> = ({ messages = [], onSend }) => (
  <>
    <MessageList messages={messages} />

    <div className="mt-3">
      <SendMessageForm onSend={onSend} />
    </div>
  </>
);

export default Chat;
