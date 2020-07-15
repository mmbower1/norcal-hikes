import React from 'react';
// components
import Button from '../../components/button/Button';
import './Hikes.scss';

const Hikes = () => {
  return (
    <div className="section-tours">
      <div className="u-center-text u-margin-bottom-big">
        <h2 className="heading-secondary">Most popular hikes.</h2>
      </div>
      <div className="row">
        <div className="col-1-of-3">
          <div className="card">
            <div className="card__side card__side-front">
              <div className="card__picture card__picture-1">
                &nbsp;
              </div>
              <h4 className="card__heading">
                <span className="card__heading-span card__heading-span-1">Beach Explorer</span>
              </h4>
              <div className="card__details">
                <ul>
                  <li>Up to 30 people</li>
                  <li>Camping</li>
                  <li>Tour Guides</li>
                  <li>Lodging/Hotel</li>
                  <li>Difficulty: easy</li>
                </ul>
              </div>
            </div>
            <div className="card__side card__side-back card__side-back-1">
              <div className="card__cta">
                <div className="card__price-box">
                  <p className="card__price-only">Only</p>
                  <p className="card__price-value">$297</p>
                </div>
                <a href="#" className="btn btn--white">Book now!</a>
              </div>
            </div>
          </div>
        </div>
        <div className="col-1-of-3">
          <div className="card">
            <div className="card__side card__side-front">
              <div className="card__picture card__picture-2">
                &nbsp;
              </div>
              <h4 className="card__heading">
                <span className="card__heading-span card__heading-span-2">Forest Hiker</span>
              </h4>
              <div className="card__details">
                <ul>
                  <li>Up to 30 people</li>
                  <li>Camping</li>
                  <li>Tour Guides</li>
                  <li>Lodging/Hotel</li>
                  <li>Difficulty: medium</li>
                </ul>
              </div>
            </div>
            <div className="card__side card__side-back card__side-back-2">
              <div className="card__cta">
                <div className="card__price-box">
                  <p className="card__price-only">Only</p>
                  <p className="card__price-value">$497</p>
                </div>
                <a href="#" className="btn btn--white">Book now!</a>
              </div>
            </div>
          </div>
        </div>
        <div className="col-1-of-3">
          <div className="card">
            <div className="card__side card__side-front">
              <div className="card__picture card__picture-3">
                &nbsp;
              </div>
                <h4 className="card__heading">
                  <span className="card__heading-span card__heading-span-3">Snow Adventurer</span>
                </h4>
                <div className="card__details">
                  <ul>
                    <li>Up to 30 people</li>
                    <li>Camping</li>
                    <li>Tour Guides</li>
                    <li>Lodging/Hotel</li>
                    <li>Difficulty: medium</li>
                  </ul>
                </div>
              </div>
            <div className="card__side card__side-back card__side-back-3">
              <div className="card__cta">
                <div className="card__price-box">
                  <p className="card__price-only">Only</p>
                  <p className="card__price-value">$897</p>
                </div>
                <a href="#" className="btn btn--white">Book now!</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="hikes-button">
        <Button />
      </div> */}
    </div>
  )
}

export default Hikes;
