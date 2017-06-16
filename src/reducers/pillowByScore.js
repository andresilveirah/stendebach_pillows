import flow from 'lodash/fp/flow';
import sortBy from 'lodash/fp/sortBy';
import find from 'lodash/fp/find';
import thru from 'lodash/fp/thru';

// These are the score thresholds for each pillow
// Example: a score of up to 21 corresponds to pillow1, a score of 27 corresponds to pillow2, and so on.
const SCORE_THRESHOLDS = [
  { maximumScore: 21, pillow: 'pillow1' },
  { maximumScore: 36, pillow: 'pillow2' },
  { maximumScore: 51, pillow: 'pillow3' },
  { maximumScore: 66, pillow: 'pillow4' },
  { maximumScore: 71, pillow: 'pillow5' },
  { maximumScore: 90, pillow: 'pillow6' }
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
