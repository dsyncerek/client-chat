import { shallow } from 'enzyme';
import React from 'react';
import Chat from './Chat';

describe('Chat', () => {
  it('renders without crashing', () => {
    shallow(<Chat onSend={jest.fn()} />);
  });
});
