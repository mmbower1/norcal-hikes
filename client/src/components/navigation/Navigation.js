import React from 'react';
import './Navigation.scss';

const Navigation = () => {
  return (
    <div className="navigation">
      <input type="checkbox" className="navigation__checkbox" id="navi-toggle" />
      <label htmlFor="navi-toggle" className="navigation__button">
        <span className="navigation__icon">&nbsp;</span>
      </label>
      <div className="navigation__background">&nbsp;</div>
      <nav className="navigation__nav">
        <ul className="navigation__list">
          <li className="navigation__item">
            <a href="" className="navigation__link">
              About
            </a>
          </li>
          <li className="navigation__item">
            <a href="" className="navigation__link">
              Benefits
            </a>
          </li>
          <li className="navigation__item">
            <a href="" className="navigation__link">
              Popular hikes
            </a>
          </li>
          <li className="navigation__item">
            <a href="" className="navigation__link">
              Subscribe
            </a>
          </li>
          <li className="navigation__item">
            <a href="" className="navigation__link">
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default Navigation;