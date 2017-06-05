import React from 'react';

import RadioInput from './RadioInput';

import '../bootstrap.min.css'

const SleepingPosition = (props) => (
  <fieldset className="form-group row">
    <legend className="col-form-legend col-sm-4">Bevorzugte Schlafposition</legend>
    <div className="col-sm-4">
      <RadioInput name="sleeping-position" value="Bauchlage" defaultChecked />
      <RadioInput name="sleeping-position" value="3/4lig" />
      <RadioInput name="sleeping-position" value="Seitenlage" />
    </div>
  </fieldset>
)

export default SleepingPosition;
