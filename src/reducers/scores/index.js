import { combineReducers } from 'redux';

import bodyMeasurements, * as fromBodyMeasurements from './bodyMeasurements';

export const totalScore = ({ scores }) =>
  fromBodyMeasurements.totalScore(scores.bodyMeasurements);

const scores = combineReducers({ bodyMeasurements });

export default scores;
