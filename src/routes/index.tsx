import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Homepage from '../pages/Homepage';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={Homepage}/>
  </Switch>
);

export default Routes;
