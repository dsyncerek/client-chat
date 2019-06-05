import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Client from './pages/Client';

const App = () => (
  <Router>
    <Route path="/host" component={Client} />
    <Route path="/host/:clientId" comonent={Client} />
    <Route path="/client" component={Client} />
  </Router>
);

export default App;
