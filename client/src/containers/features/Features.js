import React from 'react';
// components
// import FeatureBox from '../../components/feature-box/FeatureBox';
// styles
import './Features.scss';

const Features = () => {
  return (
    <div className="section-features">
      <div className="row">
        <div className="col-1-of-4">
          <div className="feature-box">
            <i className="fas fa-globe feature-box__icon"></i>
            <h3 className="heading-tertiary u-margin-bottom-small">Explore the world</h3>
            <p className="feature-box__text">
              nsectetur, adipisicing elit. Unde dolorum fuga voluptatem, quaerat tempora suscipit molestias harum voluptates iste laboriosam 
            </p>
          </div>
        </div>
        <div className="col-1-of-4">
          <div className="feature-box">
            <i className="fas fa-compass feature-box__icon"></i>
            <h3 className="heading-tertiary u-margin-bottom-small">Meet nature</h3>
            <p className="feature-box__text">
              nsectetur, adipisicing elit. Unde dolorum fuga voluptatem, quaerat tempora suscipit molestias harum voluptates iste laboriosam 
            </p>
          </div>
        </div>
        <div className="col-1-of-4">
          <div className="feature-box">
            <i className="fas fa-map feature-box__icon"></i>
            <h3 className="heading-tertiary u-margin-bottom-small">Find your way</h3>
            <p className="feature-box__text">
            nsectetur, adipisicing elit. Unde dolorum fuga voluptatem, quaerat tempora suscipit molestias harum voluptates iste laboriosam 
            </p>
          </div>
        </div>
        <div className="col-1-of-4">
          <div className="feature-box">
            <i className="fas fa-heart feature-box__icon"></i>
            <h3 className="heading-tertiary u-margin-bottom-small">Live a healthier life</h3>
            <p className="feature-box__text">
            onsectetur, adipisicing elit. Unde dolorum fuga voluptatem, quaerat tempora suscipit molestias harum voluptates iste laboriosam 
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Features;
