import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from './Home';
import Entradas from './Entradas';
import Saidas from './Saidas';
import Bot from './Bot';

const Routes = () => (
  <Switch>
    <Route exact path="/">
      <Home />
    </Route>

    <Route path="/minhas-entradas">
      <Entradas />
    </Route>

    <Route path="/minhas-saidas">
      <Saidas />
    </Route>

    <Route path="/fale-com-a-dina">
      <Bot />
    </Route>
  </Switch>
);

export default Routes;