import { LOADING, SET_POINTS } from '../constants/ActionTypes'

export const createClusters = (message) => (dispatch) => {
  dispatch(setLoading(true));
  fetch(`http://localhost:8080/rest/cluster/${message}`, {
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    method: 'GET'
  })
    .then(response => response.json())
    .then (response => dispatch({type: SET_POINTS, payload: response}))
};

export const setLoading = (bool) => ({
  type: LOADING,
  payload: bool
});
