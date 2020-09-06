import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from './Home';
import SellBuy from './SellBuy';
import Unavaliable from './Unavaliable';
import LoginRegister from './LoginRegister';

const Routes = () => (
  <Switch>
    <Route exact path="/login">
      <LoginRegister />
    </Route>

    <Route exact path="/">
      <Home />
    </Route>

    <Route path="/minhas-entradas">
      <SellBuy />
    </Route>

    <Route path="/minhas-saidas">
      <SellBuy />
    </Route>

    <Route path="/unavaliable">
      <Unavaliable />
    </Route>
  </Switch>
);

export default Routes;