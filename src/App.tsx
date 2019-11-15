import React, { FC } from 'react';
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';
import ClientChat from './pages/ClientChat';
import HostChat from './pages/HostChat';

const App: FC = () => (
  <Router>
    <Switch>
      <Route exact path="/host" component={HostChat} />
      <Route exact path="/client" component={ClientChat} />
      <Redirect to="/client" />
    </Switch>
  </Router>
);

export default App;
