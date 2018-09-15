import { combineReducers } from 'redux';
import { analysis } from '../pages/analysis/reducers/analysis';
import { counter } from '../pages/counter/reducers/counter';

export const rootReducer = combineReducers({
  analysis,
  counter
});
