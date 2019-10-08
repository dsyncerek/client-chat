import PropTypes from 'prop-types';
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
      {messages.map(({ content, position, date }) => (
        <Message key={date} content={content} position={position} />
      ))}
    </MessageListStyled>
  );
};

MessageList.propTypes = {
  messages: PropTypes.array,
  autoScroll: PropTypes.bool,
};

export default MessageList;
