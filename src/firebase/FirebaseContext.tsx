import React, { createContext, FC } from 'react';
import Firebase from './Firebase';

const firebase = new Firebase();

const FirebaseContext = createContext<Firebase>(firebase);

const FirebaseContextProvider: FC = ({ children }) => (
  <FirebaseContext.Provider value={firebase}>{children}</FirebaseContext.Provider>
);

export default FirebaseContext;
export { FirebaseContextProvider };
