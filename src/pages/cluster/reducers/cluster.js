import { LOADING, SET_POINTS } from '../constants/ActionTypes'

const initialState = {
  loading: false,
  points: null
};

export const cluster = (state = initialState, action) => {
  switch (action.type) {
    case SET_POINTS:
      return {
        ...state,
        loading: false,
        points: action.payload
      };

    case LOADING:
      return {
        ...state,
        loading: action.payload
      };

    default:
      return state
  }
};
