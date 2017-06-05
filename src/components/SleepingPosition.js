import React from 'react';

import '../bootstrap.min.css'

const SleepingPosition = (props) => (
  <fieldset className="form-group row">
    <legend className="col-form-legend col-sm-4">Bevorzugte Schlafposition</legend>
    <div className="col-sm-4">
      <div className="form-check">
        <label className="form-check-label">
          <input className="form-check-input" type="radio" name="sleeping-position" value="Bauchlage" defaultChecked />
          Bauchlage
        </label>
      </div>
      <div className="form-check">
        <label className="form-check-label">
          <input className="form-check-input" type="radio" name="sleeping-position" value="Rückenlage" />
          Rückenlage
        </label>
      </div>
      <div className="form-check">
        <label className="form-check-label">
          <input className="form-check-input" type="radio" name="sleeping-position" value="3/4lig" />
          3/4lig
        </label>
      </div>
      <div className="form-check">
        <label className="form-check-label">
          <input className="form-check-input" type="radio" name="sleeping-position" value="Seitenlage" />
          Seitenlage
        </label>
      </div>
    </div>
  </fieldset>
)

export default SleepingPosition;
