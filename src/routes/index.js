import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Analysis from '../pages/analysis/containers/Analysis';
import Counter from '../pages/counter/containers/CounterContainer';
import StartPage from '../pages/startPage/containers/StartPage';

const App = () =>
  <Router>
    <Switch>
      <Route exact path="/" component={StartPage} />
      <Route path="/counter" component={Counter} />
      <Route path="/analysis" component={Analysis} />
    </Switch>
  </Router>
;

export default App;
