import React, { useState } from 'react';
import { ButtonStyled, InputStyled, SendMessageStyled } from './SendMessage.styled';
import PropTypes from 'prop-types';

const messageDefaultValue = "";

const SendMessage = ({ onMessage }) => {
  const [message, setMessage] = useState(messageDefaultValue);

  const onButtonClick = e => {
    e.preventDefault();
    onMessage(message);
    setMessage(messageDefaultValue);
  };

  return (
    <SendMessageStyled
      onSubmit={onButtonClick}
    >
      <InputStyled
        placeholder="Enter message..."
        required
        value={message}
        onChange={e => setMessage(e.target.value)}
      />
      <ButtonStyled>
        Send
      </ButtonStyled>
    </SendMessageStyled>
  );
};

SendMessage.propTypes = {
  onMessage: PropTypes.func.isRequired,
};

export default SendMessage;
