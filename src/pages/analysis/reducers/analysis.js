import {
  END_FETCHING,
  SET_COUNTS,
  SET_POINTS
} from '../constants/ActionTypes'

const initialState = {
  hamCount: '-',
  hamPoints: null,
  isChoosingMode: true,
  isFetching: true,
  spamCount: '-',
  spamPoints: null
};

export const analysis = (state = initialState, action) => {
  switch (action.type) {
    case SET_POINTS: {
      const points = action.payload;
      let hamPoints = [];
      let spamPoints = [];

      if (points) {
        if (points.ham && points.ham.length) {
          hamPoints = points.ham;
        }
        if (points.spam && points.spam.length) {
          spamPoints = points.spam;
        }
      }

      return {
        ...state,
        hamPoints,
        spamPoints
      };
    }

    case SET_COUNTS:
      return {
        ...state,
        hamCount: action.payload && action.payload.ham,
        spamCount: action.payload && action.payload.spam,
      };

    case END_FETCHING:
      return {
        ...state,
        isChoosingMode: false,
        isFetching: action.payload
      };

    default:
      return state
  }
};
