import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from '../../util/reactIntl';
import classNames from 'classnames';

import { NamedLink } from '../../components';

import css from './SectionHowItWorks.module.css';

import signupImage from '../../assets/signup.png';
import cartImage from '../../assets/cart.png';
import giftImage from '../../assets/gift.png';
import receiveTokenImage from '../../assets/receive_token.png';
import tokenImage from '../../assets/token.png';
import verifyImage from '../../assets/verify.png';
import keysImage from '../../assets/keys.png';

const SectionHowItWorks = props => {
  const { rootClassName, className } = props;

  const classes = classNames(rootClassName || css.root, className);
  return (
    <div className={classes}>
      <div className={css.title}>
        <FormattedMessage id="SectionHowItWorks.titleLineOne" />
      </div>

      <div className={css.contentWrapper}>
        <div className={css.contentMain}>
          <div>
            <h2>Getting started</h2>
            <div className={css.section}>
              <div className={css.icon}><img src={signupImage} alt="signup icon" /></div>
              <div className={css.info}>
                <h4>Sign-Up</h4>
                <p><a href="/signup">Sign-up</a> with only your name and email address</p>
              </div>
            </div>
            <div className={css.section}>
              <div className={css.icon}><img src={verifyImage} alt="verify icon" /></div>
              <div className={css.info}>
                <h4>Get Verified</h4>
                <p>Auto Marketplace team will reach to verify identity to ensure marketplace integrity, enroll you in blockchain-based rewards program & assess your eligibility for the interest-free advance program</p>
              </div>
            </div>
          </div>
          <div>
            <h2>Rewards Program</h2>
            <div className={css.section}>
              <div className={css.icon}><img src={cartImage} alt="cart icon" /></div>
              <div className={css.info}>
                <h4>List & Transact</h4>
                <p>Interact with vendor listings or create your own online shop to sell products or services</p>
              </div>
            </div>
            <div className={css.section}>
              <div className={css.icon}><img src={tokenImage} alt="token icon" /></div>
              <div className={css.info}>
                <h4>Earn Reward Tokens</h4>
                <p>Both sides of every confirmed transaction earn blockchain-based reward tokens. Meeting certain usage and rating criteria unlocks further rewards</p>
              </div>
            </div>
            <div className={css.section}>
              <div className={css.icon}><img src={giftImage} alt="gift icon" /></div>
              <div className={css.info}>
                <h4>Spend Rewards</h4>
                <p>Redeem reward tokens on discounted goods & services and access to unique offers</p>
              </div>
            </div>
            <div className={css.section}>
              <div className={css.icon}><img src={keysImage} alt="blockchain icon" /></div>
              <div className={css.info}>
                <h4>Become An Owner</h4>
                <p>Once all reward tokens are distributed Auto Marketplace will conduct an ICO of the rewards program (please see our video for further details)</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

SectionHowItWorks.defaultProps = { rootClassName: null, className: null };

const { string } = PropTypes;

SectionHowItWorks.propTypes = {
  rootClassName: string,
  className: string,
};

export default SectionHowItWorks;
