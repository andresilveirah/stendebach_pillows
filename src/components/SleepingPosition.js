import React from 'react';

import Fieldset from './Fieldset';
import RadioInput from './RadioInput';

import '../bootstrap.min.css';

const SleepingPosition = () => (
  <Fieldset legend="Bevorzugte Schlafposition">
    <RadioInput name="sleeping-position" label="Bauchlage" value="bellyDown" defaultChecked />
    <RadioInput name="sleeping-position" label="Rückenlage" value="backDown" />
    <RadioInput name="sleeping-position" label="Seitenlage nach vorne gebeugt" value="lateralLeaning" />
    <RadioInput name="sleeping-position" label="Seitenlage" value="lateral" />
  </Fieldset>
);

export default SleepingPosition;
