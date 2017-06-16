import React from 'react';

import ReactModal from 'react-modal';

import '../bootstrap.min.css';

const PillowModal = ({ showModal, onCloseModalClick, pillow}) => (
  <ReactModal isOpen={showModal} contentLabel="Mein perfektes kissen">
    <button className='btn btn-outline-secondary btn-lg float-right' onClick={onCloseModalClick}>&times;</button>
    <h1>Ihre perfektes Kissen: </h1>
    <h2 className="display-3">
      {pillow.name} <small className="text-muted">Höhe {pillow.height}</small>
    </h2>
    <br />
    <img
      className="img-fluid rounded mx-auto d-block"
      alt={`Bild von ${pillow.name}`}
      src={pillow.picture}
    />
  </ReactModal>
);

export default PillowModal;
