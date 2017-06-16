import { combineReducers } from 'redux';

import attributes from './attributes';
import scores, * as fromScores from './scores/';
import pillowByScore from './pillowByScore'

const reducer = combineReducers({ attributes, scores });

export default reducer;

export const getPillow = (state) => pillowByScore(fromScores.totalScore(state));
