import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from './Home';
import SellBuy from './SellBuy';
import Bot from './Bot';

const Routes = () => (
  <Switch>
    <Route exact path="/">
      <Home />
    </Route>

    <Route path="/minhas-entradas">
      <SellBuy />
    </Route>

    <Route path="/minhas-saidas">
      <SellBuy />
    </Route>

    <Route path="/fale-com-a-dina">
      <Bot />
    </Route>
  </Switch>
);

export default Routes;