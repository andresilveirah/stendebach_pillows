import React from 'react';

import BodyMeasurements from './BodyMeasurements';
import SleepingPosition from './SleepingPosition';
import MattressType from './MattressType';
import FormFooter from './FormFooter';

import '../bootstrap.min.css'

const PillowForm = (props) => (
  <form action="#" onSubmit={(event) => event.preventDefault()}>
    <BodyMeasurements />
    <SleepingPosition />
    <MattressType />
    <FormFooter />
  </form>
)

export default PillowForm;
