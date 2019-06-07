import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import HostChat from './pages/HostChat';
import Sessions from './pages/Sessions';
import ClientChat from './pages/ClientChat';

const App = () => {
  return (
    <Router>
      <Route exact path="/host/:session" component={HostChat} />
      <Route exact path="/host" component={Sessions} />
      <Route exact path="/client" component={ClientChat} />
    </Router>
  );
};

export default App;
