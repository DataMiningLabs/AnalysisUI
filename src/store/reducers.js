import { combineReducers } from 'redux';
import { analysis } from '../pages/spam/reducers/analysis';
import { cluster } from '../pages/cluster/reducers/cluster';

export const rootReducer = combineReducers({
  analysis,
  cluster
});
