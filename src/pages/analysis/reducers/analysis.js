import {
  END_FETCHING,
  SET_POINTS,
  SET_MESSAGE_TYPE
} from '../constants/ActionTypes'

const initialState = {
  hamCount: '-',
  hamPoints: null,
  isChoosingMode: true,
  isFetching: true,
  messageType: null,
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
        spamPoints,
        spamCount: points.spamCount,
        hamCount: points.hamCount,
      };
    }

    case END_FETCHING:
      return {
        ...state,
        isChoosingMode: false,
        isFetching: action.payload
      };

    case SET_MESSAGE_TYPE:
      return{
        ...state,
        messageType: action.payload
      };

    default:
      return state
  }
};
