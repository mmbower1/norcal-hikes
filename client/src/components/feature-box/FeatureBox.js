import React, { useState } from 'react';
// styles
import './FeatureBox.scss';

const FeatureBox = () => {
  return (
    <div className="feature-box">
      <i className="fas fa-globe feature-box__icon"></i>
      <h3 className="heading-tertiary u-margin-bottom-small">{}</h3>
      <p className="feature-box__text">
        {} 
      </p>
    </div>
  )
}

export default FeatureBox;
