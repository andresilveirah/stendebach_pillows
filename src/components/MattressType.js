import React from 'react';

import '../bootstrap.min.css'

const MattressType = (props) => (
  <fieldset className="form-group row">
    <legend className="col-form-legend col-sm-4">Matratzenart</legend>
    <div className="col-sm-4">
      <div className="form-check">
        <label className="form-check-label">
          <input className="form-check-input" type="radio" name="mattress-type" value="Wasserbett" defaultChecked />
          Wasserbett
        </label>
      </div>
      <div className="form-check">
        <label className="form-check-label">
          <input className="form-check-input" type="radio" name="mattress-type" value="Weiche Matratze" />
          Weiche Matratze
        </label>
      </div>
      <div className="form-check">
        <label className="form-check-label">
          <input className="form-check-input" type="radio" name="mattress-type" value="Mittlere Matratzenfestigkeit" />
          Mittlere Matratzenfestigkeit
        </label>
      </div>
      <div className="form-check">
        <label className="form-check-label">
          <input className="form-check-input" type="radio" name="mattress-type" value="Harte Matratze" />
          Harte Matratze
        </label>
      </div>
    </div>
  </fieldset>
)

export default MattressType;
