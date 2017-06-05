import React from 'react';

import BodyMeasurements from './BodyMeasurements';
import '../bootstrap.min.css'

const App = () => (
  <div className="container">
    <img height="50" src="https://betteninnovation.com/images/Logos/2015/Betteninnovation.png" alt="Stendebach logo"></img>
    <form action="#">

      <BodyMeasurements />

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

      <div className="row justify-content-center">
        <button type="submit" className="col-sm-4 btn btn-primary">Abfrage 1 &rarr;</button>
        <div className="col-4"></div>
        <button type="submit" className="col-sm-4 btn btn-primary">Abfrage 2 &rarr;</button>
      </div>
    </form>
  </div>
);

export default App;
