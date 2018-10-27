import {
  END_FETCHING,
  SET_POINTS,
  SET_MESSAGE_TYPE
} from '../constants/ActionTypes'

const fetchPoints = (fileName) => (dispatch) => {
  fetch(`http://localhost:8080/rest/spam/_points/${fileName}`,
    { method: 'GET' }
  )
    .then((response) => response.json())
    .then (response => dispatch({type: SET_POINTS, payload: response}))
    .catch(() => dispatch({type: SET_POINTS, payload: null}));
};

export const setup = (fileName) => (dispatch) => {
  dispatch(fetchPoints(fileName));
};

export const analyseMessage = (message) => (dispatch) => {
  fetch(`http://localhost:8080/rest/spam/analyse`, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      "message": message
    })
  })
    .then(response => response.json())
    .then (response =>
      dispatch({type: SET_MESSAGE_TYPE, payload: response.type})
    )
    .then(
      setTimeout(() => dispatch({type: SET_MESSAGE_TYPE, payload: ''}), 3000)
    )
};

export const setFetching = (bool) => ({
  type: END_FETCHING,
  payload: bool
});
