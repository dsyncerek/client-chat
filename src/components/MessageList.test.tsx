import { shallow } from 'enzyme';
import { firestore } from 'firebase';
import React from 'react';
import { Message } from '../models/Message';
import { MessageOwnerEnum } from '../models/MessageOwnerEnum';
import { MessageList } from './MessageList';

describe('MessageList', () => {
  const MESSAGES: Message[] = [
    { content: 'hello', owner: MessageOwnerEnum.Client, date: firestore.Timestamp.fromMillis(0) },
    { content: 'test message', owner: MessageOwnerEnum.Client, date: firestore.Timestamp.fromMillis(1) },
    { content: 'test response', owner: MessageOwnerEnum.Host, date: firestore.Timestamp.fromMillis(2) },
  ];

  it('renders without crashing', () => {
    shallow(<MessageList />);
  });

  it('should display messages', () => {
    const wrapper = shallow(<MessageList messages={MESSAGES} />);

    expect(wrapper.find('.list-group-item')).toHaveLength(MESSAGES.length);
  });
});
