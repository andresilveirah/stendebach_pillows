import React from 'react';

import '../bootstrap.min.css'

const Fieldset = (props) => (
  <fieldset className="form-group row">
    <legend className="col-form-legend">{props.legend}</legend>
    <hr />
    <div className="col-sm-12">
      {props.children}
    </div>
  </fieldset>
)

export default Fieldset;
