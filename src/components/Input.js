import React from 'react';
import { connect } from 'react-redux';

import { updateAttribute } from '../actions';

const onChangeHandler = (dispatch) => (event) => dispatch(updateAttribute({
  attributeName: event.target.name,
  value: event.target.value
}));

let Input = ({dispatch, ...inputProps}) => (
  <input {...inputProps} onInput={onChangeHandler(dispatch)} onChange={onChangeHandler(dispatch)} />
);

Input = connect()(Input);

export default Input;
