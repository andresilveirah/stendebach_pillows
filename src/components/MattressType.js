import React from 'react';

import Fieldset from './Fieldset';
import RadioInput from './RadioInput';

import '../bootstrap.min.css'

const MattressType = (props) => (
  <Fieldset legend="Matratzenart">
    <RadioInput name="mattress-type" value="Wasserbett" defaultChecked />
    <RadioInput name="mattress-type" value="Weiche Matratze" />
    <RadioInput name="mattress-type" value="Mittlere Matratzenfestigkeit" />
    <RadioInput name="mattress-type" value="Harte Matratze" />
  </Fieldset>
)

export default MattressType;
