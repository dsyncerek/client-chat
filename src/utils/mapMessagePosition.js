export default (messages, owner) => {
  return messages.map(message => ({
    ...message,
    position: owner === message.owner ? 'right' : 'left',
  }));
};
