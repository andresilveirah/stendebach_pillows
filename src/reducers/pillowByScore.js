import flow from 'lodash/fp/flow';
import sortBy from 'lodash/fp/sortBy';
import find from 'lodash/fp/find';
import thru from 'lodash/fp/thru';

import pillow1 from '../assets/gcozy/GCozy_NSK_orange_8cm.png';
import pillow2 from '../assets/gcozy/GCozy_NSK_gruen_10cm.png';
import pillow3 from '../assets/gcozy/GCozy_NSK_blau_13cm.png';

const PILLOWS = [
  { name: 'Nackenstützkissen G-COZY', height: '8 cm', picture: pillow1 },
  { name: 'Nackenstützkissen G-COZY', height: '10 cm', picture: pillow2 },
  { name: 'Nackenstützkissen G-COZY', height: '13 cm', picture: pillow3 }
];

// These are the score thresholds for each pillow
// Example: a score of up to 21 corresponds to pillow1, a score of 27 corresponds to pillow2, and so on.
const SCORE_THRESHOLDS = [
  { maximumScore: 21, pillow: PILLOWS[0] },
  { maximumScore: 36, pillow: PILLOWS[1] },
  { maximumScore: 51, pillow: PILLOWS[2] }
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
