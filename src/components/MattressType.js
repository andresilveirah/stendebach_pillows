import React from 'react';

import Fieldset from './Fieldset';
import RadioInput from './RadioInput';

import '../bootstrap.min.css';

const MattressType = (props) => (
  <Fieldset legend="Matratzenart">
    <RadioInput name="mattressType" label="Wasserbett" value="watterBed" defaultChecked />
    <RadioInput name="mattressType" label="Weiche Matratze" value="soft" />
    <RadioInput name="mattressType" label="Mittlere Matratzenfestigkeit" value="medium" />
    <RadioInput name="mattressType" label="Harte Matratze" value="hard" />
  </Fieldset>
);

export default MattressType;
