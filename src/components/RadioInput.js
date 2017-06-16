import React from 'react';

import Input from './Input';
import '../bootstrap.min.css'

const RadioInput = ({ label, ...inputProps}) => (
  <div className="form-check">
    <label className="form-check-label">
      <Input className="form-check-input" type="radio" {...inputProps} /> { label || inputProps.value }
    </label>
  </div>
)

export default RadioInput;
