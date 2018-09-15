import {
  END_FETCHING,
  SET_COUNTS,
  SET_POINTS
} from '../constants/ActionTypes'

const fetchPoints = () => (dispatch) => {
  fetch('http://localhost:8080/rest/spam/_points', { method: 'GET' })
    .then((response) => response.json())
    .then (response => dispatch({type: SET_POINTS, payload: response}))
    .catch(() => dispatch({type: SET_POINTS, payload: null}));
};

const fetchCounts = () => (dispatch) => {
  fetch('http://localhost:8080/rest/spam/_count', { method: 'GET' })
    .then((response) => response.json())
    .then (response => dispatch({type: SET_COUNTS, payload: response}))
    .catch(() => dispatch({type: SET_COUNTS, payload: null}));
};

export const setup = () => (dispatch) => {
  dispatch(fetchPoints());
  dispatch(fetchCounts());
};

export const setFetching = (bool) => ({
  type: END_FETCHING,
  payload: bool
});
