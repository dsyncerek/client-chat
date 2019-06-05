import React from 'react';
import MessageList from '../MessageList/MessageList';
import SendMessage from '../SendMessage/SendMessage';
import { ChatStyled } from './Chat.styled';

const Chat = ({ messages, onMessage }) => (
  <ChatStyled>
    <MessageList messages={messages} />
    <SendMessage onMessage={onMessage} />
  </ChatStyled>
);

export default Chat;
