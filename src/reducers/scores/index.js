import { combineReducers } from 'redux';

import bodyMeasurements, * as fromBodyMeasurements from './bodyMeasurements';
import sleepingPosition, * as fromSleepingPosition from './sleepingPosition';
import mattressType, * as fromMattressType from './mattressType';

export const totalScore = ({ scores }) =>
  fromBodyMeasurements.totalScore(scores.bodyMeasurements) *
  fromSleepingPosition.totalScore(scores.sleepingPosition) *
  fromMattressType.totalScore(scores.mattressType);

const scores = combineReducers({
  bodyMeasurements,
  sleepingPosition,
  mattressType
 });

export default scores;
