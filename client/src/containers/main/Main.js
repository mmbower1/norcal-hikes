import React from 'react';
// components
import SmallButton from '../../components/small-button/SmallButton';
// img
import pic1 from '../../img/nat-1-large.jpg'
import pic2 from '../../img/nat-2-large.jpg'
import pic3 from '../../img/nat-3-large.jpg'
// styles
import './Main.scss';

const Main = () => {
  return (
    <section className="section-about">
      <div className="u-center-text u-margin-bottom-big">
        <h2 className="heading-secondary">Exciting hikes for adventurous people</h2>
      </div>
      <div className="row">
        <div className="col-1-of-2">
          <h3 className="heading-tertiary u-margin-bottom-small">You're going to fall in love with this state.</h3>
          <p className="paragraph">Northern CA has to offer what most other places don't - beaches, mountains, forests, and valleys all in one!</p>
          <h3 className="heading-tertiary u-margin-bottom-small">Live like you never have before.</h3>
          <p className="paragraph">Please leave a review and let us know how your experience was for a potential discount on your next visit!</p>
          <SmallButton />
        </div>
        <div className="col-1-of-2">
          <div className="composition">
            <img src={pic1} alt="Pic1" className="composition__photo composition__photo--p1"/>
            <img src={pic2} alt="Pic2" className="composition__photo composition__photo--p2"/>
            <img src={pic3} alt="Pic3" className="composition__photo composition__photo--p3"/>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Main;
