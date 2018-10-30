/* eslint-disable react/require-default-props */
import React from 'react';
import Button from '@material-ui/core/Button';
import HorizontalNonLinearStepper
  from '../../../components/HorizontalNonLinearStepper';

const StartPage = () =>
  <div>
    <HorizontalNonLinearStepper step={0}/>
    <Button onClick={() => {window.location = '/spam'}}>
      Анализатор спама / хама
    </Button>
    <br/>
    <Button onClick={() => {window.location = '/cluster'}}>
      Кластеризация
    </Button>
  </div>
;

export default StartPage;
