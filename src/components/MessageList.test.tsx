import { shallow } from 'enzyme';
import React from 'react';
import MessageList from './MessageList';

describe('MessageList', () => {
  it('renders without crashing', () => {
    shallow(<MessageList />);
  });
});
