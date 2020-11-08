import firebase from 'firebase/app';
import React, { FC, useEffect, useRef } from 'react';
import { Message } from '../models/Message';
import { MessageOwnerEnum } from '../models/MessageOwnerEnum';

type MessageListProps = {
  messages?: Message[];
  autoScroll?: boolean;
};

export const MessageList: FC<MessageListProps> = ({ messages = [], autoScroll = true }) => {
  const ref = useRef<HTMLDivElement>(null!);

  useEffect(() => {
    if (autoScroll && ref.current) {
      ref.current.scrollTo(0, ref.current.scrollHeight);
    }
  }, [messages, autoScroll]);

  const getDateString = (date: firebase.firestore.Timestamp): string => {
    return date.toDate().toLocaleString();
  };

  return (
    <div ref={ref} className="list-group overflow-auto" style={{ height: 500 }}>
      {messages.map((message, i) => (
        <div key={i} className="list-group-item">
          <div className={`text-${message.owner === MessageOwnerEnum.Client ? 'right' : 'left'}`}>
            <div className="text-muted" style={{ fontSize: 12 }}>
              {getDateString(message.date)}
            </div>
            <div>{message.content}</div>
          </div>
        </div>
      ))}
    </div>
  );
};
