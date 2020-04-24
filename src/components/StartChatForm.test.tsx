import { shallow } from 'enzyme';
import React from 'react';
import { StartChatForm } from './StartChatForm';

describe('StartChatForm', () => {
  it('renders without crashing', () => {
    shallow(<StartChatForm onSend={jest.fn()} />);
  });
});
