import { shallow } from 'enzyme';
import React from 'react';
import { Chat } from './Chat';

describe('Chat', () => {
  it('renders without crashing', () => {
    shallow(<Chat onSend={jest.fn()} />);
  });

  it('should contain MessageList and SendMessageForm', () => {
    const wrapper = shallow(<Chat onSend={jest.fn()} />);

    expect(wrapper.find('MessageList')).toHaveLength(1);
    expect(wrapper.find('SendMessageForm')).toHaveLength(1);
  });
});
