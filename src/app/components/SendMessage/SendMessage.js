import React, { useState } from 'react';
import { ButtonStyled, InputStyled, SendMessageStyled } from './SendMessage.styled';

const messageDefaultValue = "";

const SendMessage = ({ onMessage }) => {
  const [message, setMessage] = useState(messageDefaultValue);

  const onButtonClick = () => {
    onMessage(message);
    setMessage(messageDefaultValue);
  };

  return (
    <SendMessageStyled>
      <InputStyled
        value={message}
        onChange={e => setMessage(e.target.value)}
      />
      <ButtonStyled
        onClick={onButtonClick}
      >
        Send
      </ButtonStyled>
    </SendMessageStyled>
  );
};

export default SendMessage;
