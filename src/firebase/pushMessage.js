import firebase, { firestore } from './init';

export default (session, content, owner) => {
  const ref = firestore.collection(`messages`).doc(session);

  const message = {
    content,
    owner,
    date: new Date(),
  };

  ref
    .update({ messages: firebase.firestore.FieldValue.arrayUnion(message) })
    .catch(() => ref.set({ messages: [message] }));
};
