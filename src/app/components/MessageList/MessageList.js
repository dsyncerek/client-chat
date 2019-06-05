import React from 'react';
import Message from '../Message/Message';
import { MessageListStyled } from './MessageList.styled';

const MessageList = ({ messages = [] }) => (
  <MessageListStyled>
    {messages.map(({ content, position }) => (
      <Message
        key={content}
        content={content}
        position={position}
      />
    ))}
  </MessageListStyled>
);

export default MessageList;
