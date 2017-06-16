import React from 'react';

import ReactModal from 'react-modal';

import '../bootstrap.min.css'

const PillowModal = ({ showModal, onCloseModalClick, pillow}) => (
  <ReactModal
    isOpen={showModal}
    contentLabel="Mein perfektes kissen"
  >
    <button className='btn btn-outline-secondary btn-lg float-right' onClick={onCloseModalClick}>&times;</button>
    <h1>{pillow}</h1>
  </ReactModal>
);

export default PillowModal;
