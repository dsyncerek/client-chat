import firebase, { firestore } from './init';

export default (session, content, owner) => {
  firestore.collection(`messages`).doc(session).update({
    messages: firebase.firestore.FieldValue.arrayUnion({
      content,
      owner,
      date: new Date(),
    }),
  }).catch(() => {
    firestore.collection(`messages`).doc(session).set({
      messages: [{
        content,
        owner,
        date: new Date(),
      }],
    });
  });
};
