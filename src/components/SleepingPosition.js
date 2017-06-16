import React from 'react';

import Fieldset from './Fieldset';
import RadioInput from './RadioInput';

import '../bootstrap.min.css';

const SleepingPosition = () => (
  <Fieldset legend="Bevorzugte Schlafposition">
    <RadioInput name="sleepingPosition" label="Bauchlage" value="bellyDown" defaultChecked />
    <RadioInput name="sleepingPosition" label="Rückenlage" value="backDown" />
    <RadioInput name="sleepingPosition" label="Seitenlage nach vorne gebeugt" value="lateralLeaning" />
    <RadioInput name="sleepingPosition" label="Seitenlage" value="lateral" />
  </Fieldset>
);

export default SleepingPosition;
