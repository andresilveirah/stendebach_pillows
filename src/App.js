import React from 'react';
import './bootstrap.min.css'

const App = () => (
  <div className="container">
    <img height="50" src="https://betteninnovation.com/images/Logos/2015/Betteninnovation.png" alt="Stendebach logo"></img>
    <form action="#">

      <div className="form-group row range-container">
        <label htmlFor="shoulders" className="col-sm-3 col-form-label">Schulterabstand</label>
        <div className="col-sm-4">
          <input type="range" className="form-control" name="shoulders" min="27" max="64" defaultValue="27" />
        </div>
        <span className="col-sm-2 score">bis 27 cm</span>
      </div>


      <div className="form-group row range-container">
        <label htmlFor="neck" className="col-sm-3 col-form-label">Halsumfang</label>
        <div className="col-sm-4">
          <input type="range" className="form-control" name="neck" min="25" max="49" defaultValue="25" />
        </div>
        <span className="col-sm-2 score">bis 25 cm</span>
      </div>


      <div className="form-group row range-container">
        <label htmlFor="head" className="col-sm-3 col-form-label">Kopfumfang</label>
        <div className="col-sm-4">
          <input type="range" className="form-control" name="head" min="40" max="79" defaultValue="40" />
        </div>
        <span className="col-sm-2 score">bis 40 cm</span>
      </div>


      <div className="form-group row range-container">
        <label htmlFor="ear-to-shoulder" className="col-sm-3 col-form-label">Halslänge</label>
        <div className="col-sm-4">
          <input type="range" className="form-control" name="ear-to-shoulder" min="8" max="27" defaultValue="8" />
        </div>
        <span className="col-sm-2 score">bis 8 cm</span>
      </div>


      <fieldset className="form-group row">
        <legend className="col-form-legend col-sm-3">Bevorzugte Schlafposition</legend>
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
        <legend className="col-form-legend col-sm-3">Matratzenart</legend>
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
