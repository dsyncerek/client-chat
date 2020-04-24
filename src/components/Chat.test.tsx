import { shallow } from 'enzyme';
import React from 'react';
import { Guest } from '../models/Guest';
import { Chat } from './Chat';

const guestMock: Guest = {
  session: '123',
  name: 'Admin',
  messages: [],
};

describe('Chat', () => {
  it('renders without crashing', () => {
    shallow(<Chat guest={guestMock} onSend={jest.fn()} />);
  });

  it('should contain MessageList and SendMessageForm', () => {
    const wrapper = shallow(<Chat guest={guestMock} onSend={jest.fn()} />);

    expect(wrapper.find('MessageList')).toHaveLength(1);
    expect(wrapper.find('SendMessageForm')).toHaveLength(1);
  });
});
