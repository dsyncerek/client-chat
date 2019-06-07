import { db as firebase } from './init';

export default (session, content, owner) => {
  firebase.ref(`messages_${session}`).push({
    content,
    owner,
    date: new Date(),
  })
};
