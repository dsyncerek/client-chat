import React, { FC } from 'react';
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';
import { FirebaseContextProvider } from './firebase/FirebaseContext';
import ClientChat from './pages/ClientChat';
import HostChat from './pages/HostChat';
import { SessionContextProvider } from './session/SessionContext';

const App: FC = () => (
  <SessionContextProvider>
    <FirebaseContextProvider>
      <Router>
        <Switch>
          <Route exact path="/host" component={HostChat} />
          <Route exact path="/client" component={ClientChat} />
          <Redirect to="/client" />
        </Switch>
      </Router>
    </FirebaseContextProvider>
  </SessionContextProvider>
);

export default App;
