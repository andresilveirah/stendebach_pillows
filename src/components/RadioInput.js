import React from 'react';

import Input from './Input';
import '../bootstrap.min.css'

const RadioInput = (props) => (
  <div className="form-check">
    <label className="form-check-label">
      <Input className="form-check-input" type="radio" {...props} />
      {props.value}
    </label>
  </div>
)

export default RadioInput;
