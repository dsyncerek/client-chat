import React, { createContext } from 'react';
import session from '../utils/session';

const SessionContext = createContext({});

const SessionContextProvider = ({ children }) => (
  <SessionContext.Provider value={session()}>
    {children}
  </SessionContext.Provider>
);

export default SessionContext;
export { SessionContextProvider };
