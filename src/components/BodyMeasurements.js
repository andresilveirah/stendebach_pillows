import React from 'react';

import Fieldset from './Fieldset';
import RangeInput from './RangeInput';

import { connect } from 'react-redux';

import '../bootstrap.min.css'

let BodyMeasurements = ({ shoulders, neck, head, ear_to_shoulder }) => (
  <Fieldset legend="Körpermaße">
    <RangeInput name='shoulders' label='Schulterabstand' min='27' max='64' value={shoulders} />
    <RangeInput name='neck' label='Halsumfang' min='25' max='49' value={neck} />
    <RangeInput name='head' label='Kopfumfang' min='40' max='79' value={head} />
    <RangeInput name='ear_to_shoulder' label='Halslänge' min='8' max='27' value={ear_to_shoulder} />
  </Fieldset>
);

const mapStateToProps = (state) => ({
  ...state.attributes
});

BodyMeasurements = connect(mapStateToProps)(BodyMeasurements);

export default BodyMeasurements;
