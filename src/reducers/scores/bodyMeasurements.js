import findIndex from 'lodash/findIndex';

// These are the thresholds for each body measurement
// Example: the shoulder measurement goes from up to 27, up to 31 (and more than 27), ... and beyond 59
const MEASUREMENTS_THRESHOLDS = {
      shoulders: [27, 31, 35, 39, 43, 47, 51, 55, 59, 64],
           neck: [25, 27, 30, 32, 35, 37, 40, 43, 46, 49],
           head: [40, 44, 48, 52, 56, 60, 64, 68, 72, 79],
  earToShoulder: [8, 10, 12, 14, 16, 18, 20, 22, 24, 27]
};

const thresholdsFor = (measurement) => MEASUREMENTS_THRESHOLDS[measurement] || [];

const scoreForValue = (value, thresholds) => {
  const index = findIndex(thresholds, (measurement) => (value <= measurement));
  if(index === -1) { throw new Error(`Could not find a score for value: ${value}`) };
  return index + 1; // we need to add one because the array is 0-indexed
};

const getScoreForAttribute = (attributeName, value) =>
  scoreForValue(value, thresholdsFor(attributeName));

const bodyMeasurements = (state = {}, action) => {
  switch (action.type) {
    case 'UPDATE_ATTRIBUTE':
      // here we are only interested in the attributes from MEASUREMENTS_THRESHOLDS
      if(MEASUREMENTS_THRESHOLDS.hasOwnProperty(action.attributeName)) {
        return {
          ...state,
          [action.attributeName]: getScoreForAttribute(action.attributeName, action.value)
        };
      } else {
        return state;
      }
    default:
      return state;
  }
};

const sumTotal = (total, current) => total + parseInt(current, 10);
export const totalScore = (state) => Object.values(state).reduce(sumTotal, 0);

export default bodyMeasurements;
