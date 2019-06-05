import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import SessionList from './components/SessionList/SessionList';
import Chat from './components/Chat/Chat';

const sessions = [
  'test',
  'dasdsada',
];

const messages = [
  {
    content: 'Hello!',
    position: 'left',
  },
  {
    content: 'Hi!',
    position: 'right',
  },
];

const onMessage = message => console.log(message);

const App = () => (
  <Router>
    <Route
      exact
      path="/host/:clientId"
      render={() => <Chat messages={messages} onMessage={onMessage} />}
    />
    <Route
      exact
      path="/host"
      render={() => <SessionList sessions={sessions} />}
    />
    <Route
      exact
      path="/client"
      render={() => <Chat messages={messages} onMessage={onMessage} />}
    />
  </Router>
);

export default App;
