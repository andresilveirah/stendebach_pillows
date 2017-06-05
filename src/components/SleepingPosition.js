import React from 'react';

import Fieldset from './Fieldset';
import RadioInput from './RadioInput';

import '../bootstrap.min.css'

const SleepingPosition = (props) => (
  <Fieldset legend="Bevorzugte Schlafposition">
    <RadioInput name="sleeping-position" value="Bauchlage" defaultChecked />
    <RadioInput name="sleeping-position" value="3/4lig" />
    <RadioInput name="sleeping-position" value="Seitenlage" />
  </Fieldset>
)

export default SleepingPosition;
