import React from 'react';

import RangeInput from './RangeInput';
import '../bootstrap.min.css'

const BodyMeasurements = (props) => (
  <div>
    <RangeInput name='shoulders' label='Schulterabstand' min='27' max='64' defaultValue='27' />
    <RangeInput name='neck' label='Halsumfang' min='25' max='49' defaultValue='25' />
    <RangeInput name='head' label='Kopfumfang' min='40' max='79' defaultValue='40' />
    <RangeInput name='ear-to-shoulder' label='Halslänge' min='8' max='27' defaultValue='8' />
  </div>
)

export default BodyMeasurements;
