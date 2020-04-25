import React, { FC } from 'react';
import { Guest } from '../models/Guest';
import { MessageList } from './MessageList';
import { SendMessageForm } from './SendMessageForm';

type ChatProps = {
  guest: Guest;
  onSend: (message: string) => void;
};

export const Chat: FC<ChatProps> = ({ guest, onSend }) => (
  <>
    <div className="badge badge-primary mb-1">{guest.name}</div>
    <MessageList messages={guest.messages} />

    <div className="mt-3">
      <SendMessageForm onSend={onSend} />
    </div>
  </>
);
