import flow from 'lodash/fp/flow';
import sortBy from 'lodash/fp/sortBy';
import find from 'lodash/fp/find';
import thru from 'lodash/fp/thru';

const pillow1 = 'http://betteninnovation.com/kissen-klein/';
const pillow2 = 'http://betteninnovation.com/kissen-mittle/';
const pillow3 = 'http://betteninnovation.com/kissen-gross/';

const PILLOWS = [
  { name: 'Nackenstützkissen VisCozy', height: '8 cm', picture: pillow1 },
  { name: 'Nackenstützkissen VisCozy', height: '10 cm', picture: pillow2 },
  { name: 'Nackenstützkissen VisCozy', height: '13 cm', picture: pillow3 }
];

// These are the score thresholds for each pillow
// Example: a score of up to 21 corresponds to pillow1, a score of 27 corresponds to pillow2, and so on.
const SCORE_THRESHOLDS = [
  { maximumScore: 36, pillow: PILLOWS[0] },
  { maximumScore: 66, pillow: PILLOWS[1] },
  { maximumScore: 90, pillow: PILLOWS[2] }
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
