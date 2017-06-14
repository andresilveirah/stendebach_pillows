import flow from 'lodash/fp/flow';
import sortBy from 'lodash/fp/sortBy';
import find from 'lodash/fp/find';
import thru from 'lodash/fp/thru';
import findLastIndex from 'lodash/findLastIndex'

// These are the thresholds for each body measurement
// Example: the shoulder measurement goes from up to 27, up to 31 (and more than 27), ... and beyond 59
const MEASUREMENTS_THRESHOLDS = {
        shoulders: [27, 31, 35, 39, 43, 47, 51, 55, 59],
             neck: [25, 27, 30, 32, 35, 37, 40, 43, 46],
             head: [40, 44, 48, 52, 56, 60, 64, 68, 72],
  ear_to_shoulder: [8, 10, 12, 14, 16, 18, 20, 22, 24]
};

const thresholdsFor = (measurement) => MEASUREMENTS_THRESHOLDS[measurement] || [];

// These are the score thresholds for each pillow
// Example: a score of up to 21 corresponds to pillow1, a score of 27 corresponds to pillow2, and so on.
const SCORE_THRESHOLDS = [
  { score: 21, pillow: 'pillow1'},
  { score: 36, pillow: 'pillow2'},
  { score: 51, pillow: 'pillow3'},
  { score: 66, pillow: 'pillow4'},
  { score: 71, pillow: 'pillow5'},
  { score: 90, pillow: 'pillow6'}
];

const scoreForValue = (value, thresholds) => {
  const index = findLastIndex(thresholds, (measurement) => (measurement <= value))
  return index + 1; // the score is 1 indexed instead of 0 indexed like Arrays
}

const getScoreForAttribute = (attributeName, value) =>
  scoreForValue(value, thresholdsFor(attributeName));

export const getPillowForScore = (userScore, thresholds = SCORE_THRESHOLDS) => {
  return flow(
    sortBy(['score']),
    find(({ score }) => userScore <= score),
    thru(value => Object(value)) // this step is necessary because find might return undefined
  )(thresholds)
  .pillow;
}

const scores = (state = {}, action) => {
  switch (action.type) {
    case 'UPDATE_ATTRIBUTE':
      return {
        ...state,
        [action.attributeName]: getScoreForAttribute(action.attributeName, action.value)
      };
    default:
      return state;
  }
};

export default scores;
