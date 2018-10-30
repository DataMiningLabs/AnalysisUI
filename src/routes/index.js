import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Analysis from '../pages/spam/containers/Analysis';
import Cluster from '../pages/cluster/containers/Cluster';
import StartPage from '../pages/startPage/containers/StartPage';

const App = () =>
  <Router>
    <div style={{textAlign: 'center'}}>
      <Switch>
        <Route exact path="/" component={StartPage} />
        <Route path="/spam" component={Analysis} />
        <Route path="/cluster" component={Cluster} />
      </Switch>
    </div>
  </Router>
;

export default App;
