import {
  INCREMENT_COUNTER,
  DECREMENT_COUNTER,
  SET_INIT_COUNT
} from '../constants/ActionTypes'

const initialState = {
  count: 0
};

export const counter = (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT_COUNTER:
      return {
        ...state,
        count: state.count + 1
      };

    case DECREMENT_COUNTER:
      return {
        ...state,
        count: state.count - 1
      };

    case SET_INIT_COUNT: {
      return {
        ...state,
        count: action.payload
      };
    }

    default:
      return state
  }
};
