import { combineReducers } from 'redux';

import bodyMeasurements, * as fromBodyMeasurements from './bodyMeasurements';
import sleepingPosition, * as fromSleepingPosition from './sleepingPosition';

export const totalScore = ({ scores }) =>
  fromBodyMeasurements.totalScore(scores.bodyMeasurements) *
  fromSleepingPosition.totalScore(scores.sleepingPosition);

const scores = combineReducers({
  bodyMeasurements,
  sleepingPosition
 });

export default scores;
