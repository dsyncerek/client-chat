import { createContext } from 'react';
import Session from './Session';

const SessionContext = createContext<string>(new Session().getSession());

export default SessionContext;
