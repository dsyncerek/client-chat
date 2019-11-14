import React, { createContext, FC } from 'react';
import Session from './Session';

const session = new Session();

const SessionContext = createContext<string>(session.getSession());

const SessionContextProvider: FC = ({ children }) => (
  <SessionContext.Provider value={session.getSession()}>{children}</SessionContext.Provider>
);

export default SessionContext;
export { SessionContextProvider };
