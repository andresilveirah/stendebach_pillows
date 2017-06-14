import React from 'react';
import { connect } from 'react-redux';

import BodyMeasurements from './BodyMeasurements';
import SleepingPosition from './SleepingPosition';
import MattressType from './MattressType';
import FormFooter from './FormFooter';

import { getPillow } from '../reducers';

import '../bootstrap.min.css'

let PillowForm = (props) => (
  <form action="#" onSubmit={(event) => event.preventDefault()}>
    <BodyMeasurements />
    <SleepingPosition />
    <MattressType />
    <FormFooter />
    <span>{props.pillow}</span>
  </form>
);

const mapStateToProps = (state) => ({
  pillow: getPillow(state)
});

PillowForm = connect(mapStateToProps)(PillowForm);

export default PillowForm;
