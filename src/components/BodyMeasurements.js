import React from 'react';

import Fieldset from './Fieldset';
import RangeInput from './RangeInput';
import '../bootstrap.min.css'

const BodyMeasurements = (props) => (
  <Fieldset legend="Körpermaße">
    <RangeInput name='shoulders' label='Schulterabstand' min='27' max='64' defaultValue='27' />
    <RangeInput name='neck' label='Halsumfang' min='25' max='49' defaultValue='25' />
    <RangeInput name='head' label='Kopfumfang' min='40' max='79' defaultValue='40' />
    <RangeInput name='ear-to-shoulder' label='Halslänge' min='8' max='27' defaultValue='8' />
  </Fieldset>
)

export default BodyMeasurements;
