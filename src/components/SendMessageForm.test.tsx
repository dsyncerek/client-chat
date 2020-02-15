import { mount, shallow } from 'enzyme';
import React from 'react';
import SendMessageForm from './SendMessageForm';

describe('SendMessageForm', () => {
  it('renders without crashing', () => {
    shallow(<SendMessageForm onSend={jest.fn()} />);
  });

  it('should contain form with input', () => {
    const wrapper = shallow(<SendMessageForm onSend={jest.fn()} />);

    expect(wrapper.find('form')).toHaveLength(1);
    expect(wrapper.find('input')).toHaveLength(1);
  });

  it('should send a message after submitting', () => {
    const onSendCallback = jest.fn();
    const wrapper = mount(<SendMessageForm onSend={onSendCallback} />);
    const input = wrapper.find('input');
    const form = wrapper.find('form');

    input.simulate('change', { target: { value: 'foo' } });
    form.simulate('submit', { preventDefault: jest.fn() });

    expect(onSendCallback).toBeCalled();
    expect(onSendCallback).toBeCalledWith('foo');
  });
});
