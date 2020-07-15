import React from 'react';
import './Modal.scss';
// containers
import Subscription from '../../containers/subscription/Subscription';

const Modal = () => {
  return (
    <div id="modal" className="modal">
      <div className="modal__content">
        <Subscription /><a href="#section-tours" className="modal__close">&times;</a>
      </div>
    </div>
  )
}

export default Modal;
