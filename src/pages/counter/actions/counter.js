import { createAction } from 'redux-actions'
import {
INCREMENT_COUNTER,
DECREMENT_COUNTER,
SET_INIT_COUNT
} from '../constants/ActionTypes'

export const increment = createAction(INCREMENT_COUNTER);

export const decrement = createAction(DECREMENT_COUNTER);

export const incrementIfOdd = () => (dispatch, getState) => {
    const { counter } = getState();

    if (counter % 2 === 0) {
      return
    }

    dispatch({type: INCREMENT_COUNTER})
};

export const fetchNumbers = () => (dispatch) => {
  fetch('http://localhost:8080/rest/counter', { method: 'GET' })
    .then((response) => response.json())
    .then (response => {
      const count = Number(response.counter);
      dispatch({type: SET_INIT_COUNT, payload: count})
    })
    .catch(() => dispatch({type: SET_INIT_COUNT, payload: 0}));
};

