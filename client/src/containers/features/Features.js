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
            <h3 className="heading-tertiary u-margin-bottom-small">Explore Safely</h3>
            <p className="feature-box__text">
              Plenty of tour guides and precautions are available to the public to ensure all safety.
            </p>
          </div>
        </div>
        <div className="col-1-of-4">
          <div className="feature-box">
            <i className="fas fa-compass feature-box__icon"></i>
            <h3 className="heading-tertiary u-margin-bottom-small">Meet True Nature</h3>
            <p className="feature-box__text">
              And California offers some of the best weather in the world!
            </p>
          </div>
        </div>
        <div className="col-1-of-4">
          <div className="feature-box">
            <i className="fas fa-heart feature-box__icon"></i>
            <h3 className="heading-tertiary u-margin-bottom-small">Live Healthier</h3>
            <p className="feature-box__text">
              Your body and mind will thank you later.
            </p>
          </div>
        </div>
        <div className="col-1-of-4">
          <div className="feature-box">
            <i className="fas fa-map feature-box__icon"></i>
            <h3 className="heading-tertiary u-margin-bottom-small">Find Your Way</h3>
            <p className="feature-box__text">
            The most important thing to have fun and live to the fullest with yourself and others.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Features;
