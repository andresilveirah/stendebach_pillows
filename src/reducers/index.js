import { combineReducers } from 'redux';

import attributes from './attributes';
import scores, * as fromScores from './scores';

const sumTotal = (total, current) => total + parseInt(current, 10)

const reducer = combineReducers({ attributes, scores });

export default reducer;

export const getPillow = (state) => {
  const initialTotal = 0;
  const totalScore = Object.values(state.scores).reduce(sumTotal, initialTotal);
  return fromScores.getPillowForScore(totalScore);
};
