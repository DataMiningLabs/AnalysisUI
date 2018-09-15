import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import styled from 'styled-components';

import StartPage from '../pages/index';
import Counter from '../pages/counter/containers/CounterContainer';

const Container = styled.div`text-align: center;`;

const Routes = () => (
  <Router>
    <Container>
      <Route path="/" component={StartPage}/>
      <Route path="/counter" component={Counter}/>
    </Container>
  </Router>
);

export default Routes
