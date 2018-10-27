/* eslint-disable react/require-default-props */
import React from 'react';
import Button from '@material-ui/core/Button';

const StartPage = () =>
  <div>
    <Button onClick={() => {window.location = '/analysis'}}>
      Analysis
    </Button>
  </div>
;

export default StartPage;
