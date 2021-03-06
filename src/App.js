import React from 'react';
import { Route, Switch } from 'react-router';

import Login from './pages/Login';
import Register from './pages/Register';
import Wallet from './pages/Wallet';

import './styles/index.css';

function App() {
  return (
    <Switch>
      <Route path="/carteira">
        <Wallet />
      </Route>

      <Route path="/register">
        <Register />
      </Route>

      <Route path="/">
        <Login />
      </Route>
    </Switch>
  );
}

export default App;
