/* eslint-disable react/require-default-props */
import React from 'react';
import Button from '@material-ui/core/Button';

const StartPage = () =>
  <div>
    <Button onClick={() => {window.location = '/analysis'}}>
      Analysis
    </Button>
    <Button onClick={() => {window.location = '/counter'}}>
      Counter
    </Button>
  </div>
;

export default StartPage;
