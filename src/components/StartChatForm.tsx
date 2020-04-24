import React, { ChangeEvent, FC, FormEvent, useState } from 'react';

type StartChatFormProps = {
  onSend: (name: string) => void;
};

export const StartChatForm: FC<StartChatFormProps> = ({ onSend }) => {
  const [name, setName] = useState('');

  const onFormSubmit = (event: FormEvent) => {
    event.preventDefault();
    onSend(name);
    setName('');
  };

  const onInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };

  return (
    <form className="input-group input-group-lg" onSubmit={onFormSubmit}>
      <input
        className="form-control"
        placeholder="Enter your name..."
        aria-label="Your name"
        required
        value={name}
        onChange={onInputChange}
      />
      <div className="input-group-append">
        <button className="btn btn-primary">Save</button>
      </div>
    </form>
  );
};
