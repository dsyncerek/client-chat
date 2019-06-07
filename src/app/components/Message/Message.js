import PropTypes from 'prop-types';
import React from 'react';
import { MessageStyled } from './Message.styled';

const Message = ({ content, position = 'left' }) => (
  <MessageStyled position={position}>
    {content}
  </MessageStyled>
);

Message.propTypes = {
  content: PropTypes.string.isRequired,
  position: PropTypes.oneOf(['left', 'right']),
};

export default Message;
