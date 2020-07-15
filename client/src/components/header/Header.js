import React, {useState, useEffect} from 'react';
// components
import Button from '../button/Button';
// scss
import './Header.scss';
import logoWhite from '../../img/logo-white.png';

const Header = () => {
  const [discover, setDiscover] = useState('Discover outdoors');

  return (
    <div className="header">
      <div className="logo-box">
        <img src={logoWhite} alt="logo" className="logo" />
      </div>
      <div className="text-box">
        <h1 className="heading-primary">
          <span className="heading-primary-main">Northern California</span>
          <span className="heading-primary-sub">is where life happens</span>
        </h1>
        <a href='#modal'>
          <Button></Button>
        </a>
        {/* <Button />Discover Outdoors */}
        {/* <h4>{discover}</h4> */}
      </div>
    </div>
  )
}

export default Header;
