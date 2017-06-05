import React from 'react';

import RadioInput from './RadioInput';

import '../bootstrap.min.css'

const MattressType = (props) => (
  <fieldset className="form-group row">
    <legend className="col-form-legend col-sm-4">Matratzenart</legend>
    <div className="col-sm-4">
      <RadioInput name="mattress-type" value="Wasserbett" defaultChecked />
      <RadioInput name="mattress-type" value="Weiche Matratze" />
      <RadioInput name="mattress-type" value="Mittlere Matratzenfestigkeit" />
      <RadioInput name="mattress-type" value="Harte Matratze" />
    </div>
  </fieldset>
)

export default MattressType;
