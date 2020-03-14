import React, { ChangeEvent, FC, FormEvent, useState } from 'react';

type SendMessageFormProps = {
  onSend: (message: string) => void;
  defaultMessage?: string;
};

export const SendMessageForm: FC<SendMessageFormProps> = ({ onSend, defaultMessage = '' }) => {
  const [message, setMessage] = useState(defaultMessage);

  const onFormSubmit = (event: FormEvent) => {
    event.preventDefault();
    onSend(message);
    setMessage(defaultMessage);
  };

  const onInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setMessage(event.target.value);
  };

  return (
    <form className="input-group input-group-lg" onSubmit={onFormSubmit}>
      <input
        className="form-control"
        placeholder="Enter message..."
        aria-label="Your message"
        required
        value={message}
        onChange={onInputChange}
      />
      <div className="input-group-append">
        <button className="btn btn-primary">Send</button>
      </div>
    </form>
  );
};
