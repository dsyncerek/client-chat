import React from 'react';
import PropTypes from 'prop-types';
import { MessageStyled } from './Message.styled';

const Message = ({ content, position = 'left' }) => (
  <MessageStyled position={position}>
    {content}
  </MessageStyled>
);

Message.propTypes = {
  content: PropTypes.string.isRequired,
};

export default Message;
