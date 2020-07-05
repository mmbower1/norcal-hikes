import React, { useState } from 'react';
// components
import Button from '../../components/button/Button';
import './Subscription.scss';
// import SubscribeLogo from '../../img/nat-10.jpg';

const Subscription = () => {
  const [subscribe, setSubscribe] = useState("Subscribe");

  return (
    <div className="section-book">
      <div className="row">
        <div className="book">
          <div className="book__form">
            <form action="#" className="form">
              <div className="u-margin-bottom-medium">
                <h2 className="heading-secondary">
                  Subscribe now
                </h2>
              </div>
              <div className="form__group">
                <input type="text" className="form__input" placeholder="Full Name" required />
                <label htmlFor="name" className="form__label">Full name</label>
              </div>
              <div className="form__group">
                <input type="email" className="form__input" placeholder="Email" id="email" required />
                <label htmlFor="email" className="form__label">Email address</label>
              </div>
            </form>
            <Button></Button>
            <h4>{subscribe} &rarr;</h4>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Subscription;
