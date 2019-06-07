import React from 'react';
import { ChatGridStyled } from './ChatGrid.styled';
import PropTypes from 'prop-types';

const ChatGrid = ({ children }) => (
  <ChatGridStyled>
    {children}
  </ChatGridStyled>
);

ChatGrid.propTypes = {
  children: PropTypes.node,
};

export default ChatGrid;
