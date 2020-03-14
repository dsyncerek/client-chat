import { createContext, useContext } from 'react';
import { Firebase } from './Firebase';

export const FirebaseContext = createContext<Firebase>(new Firebase());
export const useFirebase = () => useContext(FirebaseContext);
