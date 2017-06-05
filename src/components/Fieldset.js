import React from 'react';

import '../bootstrap.min.css'

const MattressType = (props) => (
  <fieldset className="form-group row">
    <legend className="col-form-legend col-sm-4">{props.legend}</legend>
    <hr />
    <div className="col-sm-12">
      {props.children}
    </div>
  </fieldset>
)

export default MattressType;
