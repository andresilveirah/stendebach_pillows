import { combineReducers } from 'redux';

import attributes from './attributes';
import scores, * as fromScores from './scores/';
import getPillowSizeByScore from './pillowSizeByScore';
import config from './config';

const reducer = combineReducers({ attributes, scores, config });

export default reducer;

const getPillows = (state) => state.config.pillows;
const getPillowBySize = (pillows, size) => pillows[size];

export const getPillow = (state) =>
  getPillowBySize(
    getPillows(state),
    getPillowSizeByScore(fromScores.totalScore(state))
);
