import flow from 'lodash/fp/flow';
import sortBy from 'lodash/fp/sortBy';
import find from 'lodash/fp/find';
import thru from 'lodash/fp/thru';

import config from '../config.json';

// These are the score thresholds for each pillow
// Example: a score of up to 21 corresponds to pillow1, a score of 27 corresponds to pillow2, and so on.
const SCORE_THRESHOLDS = [
  { maximumScore: 36, pillow: config.pillows.small },
  { maximumScore: 66, pillow: config.pillows.medium },
  { maximumScore: 90, pillow: config.pillows.big }
];

const pillowByScore = (score, thresholds = SCORE_THRESHOLDS) => {
  return flow(
   sortBy([ 'maximumScore' ]),
   find(({ maximumScore }) => score <= maximumScore),
   thru(Object) // this step is necessary because find might return undefined
  )(thresholds)
  .pillow;
};

export default pillowByScore;
