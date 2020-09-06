import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from './Home';
import SellBuy from './SellBuy';
import Unavaliable from './Unavaliable';
import CashFlow from './CashFlow/CashFlow';

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

    <Route path="/meu-fluxo-de-caixa">
      <CashFlow />
    </Route>

    <Route path="/unavaliable">
      <Unavaliable />
    </Route>
  </Switch>
);

export default Routes;