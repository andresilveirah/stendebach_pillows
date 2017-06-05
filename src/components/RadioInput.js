import React from 'react';

import '../bootstrap.min.css'

const RadioInput = (props) => (
  <div className="form-check">
    <label className="form-check-label">
      <input className="form-check-input" type="radio" {...props} />
      {props.value}
    </label>
  </div>
)

export default RadioInput;
