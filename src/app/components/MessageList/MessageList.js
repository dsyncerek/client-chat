import React from 'react';
import Message from '../Message/Message';
import { MessageListStyled } from './MessageList.styled';

const MessageList = () => (
  <MessageListStyled>
    {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map(elem => (
      <Message
        key={elem}
        position={elem % 2 ? 'left' : 'right'}
        content="Hello! Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      />
    ))}
  </MessageListStyled>
);

export default MessageList;
