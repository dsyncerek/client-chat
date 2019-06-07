import React, { useEffect, useRef } from 'react';
import Message from '../Message/Message';
import { MessageListStyled } from './MessageList.styled';

const MessageList = ({ messages = [], autoScroll = true }) => {
  const ref = useRef(null);

  useEffect(() => {
    if (autoScroll) {
      const $elem = ref.current;
      $elem.scrollTo(0, $elem.scrollHeight);
    }
  }, [messages, autoScroll]);

  return (
    <MessageListStyled ref={ref}>
      {messages.map(({ content, position }) => (
        <Message
          key={content}
          content={content}
          position={position}
        />
      ))}
    </MessageListStyled>
  );
};

export default MessageList;
