import React from 'react';
import { BrowserRouter as Router, Redirect, Route, Switch } from "react-router-dom";
import HostChat from './pages/HostChat';
import Sessions from './pages/Sessions';
import ClientChat from './pages/ClientChat';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/host/:session" component={HostChat} />
        <Route exact path="/host" component={Sessions} />
        <Route exact path="/client" component={ClientChat} />
        <Redirect to="/client" />
      </Switch>
    </Router>
  );
};

export default App;
