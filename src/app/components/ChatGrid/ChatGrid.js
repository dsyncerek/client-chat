import PropTypes from 'prop-types';
import React from 'react';
import { ChatGridStyled } from './ChatGrid.styled';

const ChatGrid = ({ children }) => (
  <ChatGridStyled>
    {children}
  </ChatGridStyled>
);

ChatGrid.propTypes = {
  children: PropTypes.node,
};

export default ChatGrid;
