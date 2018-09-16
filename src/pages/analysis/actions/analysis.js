import {
  END_FETCHING,
  SET_COUNTS,
  SET_POINTS
} from '../constants/ActionTypes'

const fetchPoints = (fileName) => (dispatch) => {
  fetch(`http://localhost:8080/rest/spam/_points/${fileName}`, { method: 'GET' })
    .then((response) => response.json())
    .then (response => dispatch({type: SET_POINTS, payload: response}))
    .catch(() => dispatch({type: SET_POINTS, payload: null}));
};

const fetchCounts = (fileName) => (dispatch) => {
  fetch(`http://localhost:8080/rest/spam/_count/${fileName}`, { method: 'GET' })
    .then((response) => response.json())
    .then (response => dispatch({type: SET_COUNTS, payload: response}))
    .catch(() => dispatch({type: SET_COUNTS, payload: null}));
};

export const setup = (fileName) => (dispatch) => {
  dispatch(fetchPoints(fileName));
  dispatch(fetchCounts(fileName));
};

export const setFetching = (bool) => ({
  type: END_FETCHING,
  payload: bool
});
