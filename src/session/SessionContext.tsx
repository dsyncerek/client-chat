import { createContext, useContext } from 'react';
import { Session } from './Session';

export const SessionContext = createContext<string>(new Session().getSession());
export const useSession = () => useContext(SessionContext);
