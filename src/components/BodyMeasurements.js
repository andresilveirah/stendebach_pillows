import React from 'react';

import Fieldset from './Fieldset';
import RangeInput from './RangeInput';

import { connect } from 'react-redux';

import '../bootstrap.min.css';

import config from '../config.json';

let BodyMeasurements = ({ shoulders, neck, head, earToShoulder }) => (
  <div className="row align-items-center">
    <div className="col-md-8 col-sm-12">
      <Fieldset legend="Körpermaße">
        <RangeInput name='shoulders' label='Schulterabstand' min='23' max='64' value={shoulders} />
        <RangeInput name='neck' label='Halsumfang' min='22' max='49' value={neck} />
        <RangeInput name='head' label='Kopfumfang' min='36' max='79' value={head} />
        <RangeInput name='earToShoulder' label='Halslänge' min='4' max='27' value={earToShoulder} />
      </Fieldset>
    </div>
    <div className="col-md-4 col-sm-12">
      <img
        className="img-fluid rounded mx-auto d-block"
        alt='Vermessungsbeispiel'
        src={config.pictures.example}
      />
    </div>
  </div>
);

const mapStateToProps = (state) => ({ ...state.attributes });

BodyMeasurements = connect(mapStateToProps)(BodyMeasurements);

export default BodyMeasurements;
