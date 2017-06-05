import React from 'react';

import '../bootstrap.min.css'

const start = 'bis';
const end = 'von';

const prefix = (current, min, max) => {
  if (current === min) {
    return start;
  } else if (current === max) {
    return end;
  } else {
    return "";
  }
};

const score = (current, min, max) => prefix(current, min, max) + " " + current + " cm";

const ScoreLabel = ({current, min, max}) => (
  <span className="col-sm-2 score">{score(current, min, max)}</span>
);

export default ScoreLabel;
