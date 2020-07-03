import React from 'react';
// components
import SmallButton from '../../components/small-button/SmallButton';
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
          <p className="paragraph">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facere rerum sapiente, hic quisquam quae aliquid eaque, obcaecati ris voluptate us quia nam.</p>
          <h3 className="heading-tertiary u-margin-bottom-small">Live like you never have before.</h3>
          <p className="paragraph">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facere rerum sapiente, hic quisquam quae aliquid eaque, hello watermelon town place .</p>
          <SmallButton />
        </div>
        <div className="col-1-of-2">
          Image Composition
        </div>
      </div>
    </section>
  )
}

export default Main;
