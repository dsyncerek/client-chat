import React from 'react';
import MessageList from '../MessageList/MessageList';
import SendMessage from '../SendMessage/SendMessage';
import { ChatStyled } from './Chat.styled';
import PropTypes from 'prop-types';

const Chat = ({ messages = [], onMessage }) => (
  <ChatStyled>
    <MessageList messages={messages} />
    <SendMessage onMessage={onMessage} />
  </ChatStyled>
);

Chat.propTypes = {
  messages: PropTypes.array,
  onMessage: PropTypes.func.isRequired,
};

export default Chat;
