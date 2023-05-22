import React, {useState} from 'react';
import { IconPlay, Modal } from '../../components';
import { StaticPage, TopbarContainer } from '../../containers';
import {
  LayoutSingleColumn,
  LayoutWrapperTopbar,
  LayoutWrapperMain,
  LayoutWrapperFooter,
  Footer,
  NamedLink
} from '../../components';

import css from './HowItWorksPage.module.css';

import ownershipStake from './ownershipStake.png'
import transactionsImg from './transactionImg.png'
import volumeImg from './volumeImg.png'
import ratingsImg from './ratingsImg.png'
import speakerImg from './speakerImg.png'
import car from './car.png'

const HowItWorksPage = () => {
  const [isOpen, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };
  const onManageDisableScrolling = (componentId, scrollingDisabled = true) => {
  };

  // prettier-ignore
  return (
    <StaticPage
      title="How it works"
      schema={{
        '@context': 'http://schema.org',
        '@type': 'HowItWorksPage',
        description: 'How Automarketplace works',
        name: 'How It Works',
      }}
    >
      <LayoutSingleColumn>
        <LayoutWrapperTopbar>
          <TopbarContainer />
        </LayoutWrapperTopbar>

        <LayoutWrapperMain className={css.staticPageWrapper}>
          <h1 className={css.howItWorksHeading}>How It Works?</h1>
          <div className={css.video}>
            <div className={css.videoContent}>
              <span onClick={handleOpen} className={css.iconPlay}><IconPlay /></span>
            </div>
            <Modal
              isOpen={isOpen}
              onClose={() => {
                setOpen(false);
              }}
              onManageDisableScrolling={onManageDisableScrolling}
            >
            <iframe
              className={css.video}
              src="https://www.youtube.com/embed/T4I2CmNpCeg"
              title="YouTube video player"
              frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen>
            </iframe>
            </Modal>
          </div>
          <img className={css.userOwnershipImage} src={ownershipStake} alt="User OwnershipStake image" />
          <h1 className={css.heading}>Earning AUTOMKT Tokens</h1>
          <p className={css.businessModelContent}>
            The AutoMarketplace rewards program is represented by AUTOMKT
            tokens (an Ethereum ERC-20 token). AUTOMKT tokens are rewarded
            to users based on four key metrics.
          </p>
          <div className={css.keyMetricContainer}>
            <div className={css.keyMetrictopRow}>
              <img className={css.upperContainerImgs} src={transactionsImg} alt="key metrics images" />
              <h3>Transactions</h3>
            </div>
            <div className={css.keyMetrictopRow}>
              <img className={css.upperContainerImgs} src={volumeImg} alt="key metrics images" />
              <h3>Volume</h3>
            </div>
            <div className={css.keyMetrictopRow}>
              <img className={css.upperContainerImgs} src={ratingsImg} alt="key metrics images" />
              <h3>Ratings</h3>
            </div>
            <div className={css.keyMetrictopRow}>
              <img className={css.upperContainerImgs} src={speakerImg} alt="key metrics images" />
              <h3>Referrals</h3>
            </div>
          </div>
          <p className={css.earnTokens}>
            For how users specifically earn AUTOMKT tokens, click <NamedLink name="EarningAUTOMKTTokenPage" className={css.hereLink}>here</NamedLink>.
          </p>
          <h1 className={css.heading}>Tokenonmics</h1>
          <p className={css.paragraph}>
            20 million AUTOMKT reward tokens will be created. Users will be allocated 80% of all AUTOMKT tokens created.
            The founders & management will be allocated 20% of all AUTOMKT tokens.
            The initial value of the AUTOMKT token is the value of the AutoMarketplace rewards program. After all tokens are distributed AUTOMKT Tokens will list on a crypto exchange, such as Coinbase.
            At that point, the market will value the AUTOMKT token (i.e., valuation based on usage, growth, utility of rewards program, etc).
          </p>
          <p className={css.paragraph}>
            In order to correctly incentivize continued usage of the marketplace,
            AUTOMKT tokens will have a 1% annual inflation rate after all 20 million tokens are distributed.
          </p>
          <p className={css.paragraph}>
            PIE CHART OF DISTRIBUTION & COLOR KEY
          </p>
          <h1 className={css.heading}>AUTOMKT Tokens & Regulations</h1>
          <p className={css.paragraph}>
            Since the regulatory environment related to crypto assets is constantly changing,
            we want to ensure any structure we build is in compliance with regulatory guidance. In an ideal world,
            the AUTOMKT token would simply represent a share of the company, but that could violate current and/or future US securities laws.
          </p>
          <p className={css.paragraph}>
            Therefore, our path to making AutoMarketplace user-owned is through a rewards program built on the blockchain.
            A crypto-enabled rewards program is allowed under current regulatory guidance.
            The AUTOMKT rewards program will not only serve as the foundational building block of AutoMarketplace's ultimate value,
            but also have benefits similar to other reward programs (i.e., discounts on goods & services, Buy Now, Pay Later (BNPL) access,
            crypto rewards).
          </p>
          <p className={css.paragraph}>
            Once all AUTOMKT reward tokens are distributed, we will apply for a formal license that will allow us to list
            AUTOMKT reward tokens on well known crypto exchanges, such as Coinbase. We believe, as the crypto asset class gains mass adoption,
            regulations will become clearer.
          </p>
          <div className={css.buttonContainer}>
            <NamedLink name="AutomktRewards" className={css.userOwned}>
                <button className={css.automktBtn}>AUTOMKT Rewards
                  <svg id="Layer" enable-background="new 0 0 64 64" className={css.rightArrow}  viewBox="0 0 64 64"
                    xmlns="http://www.w3.org/2000/svg">
                    <path d="m37.379 12.552c-.799-.761-2.066-.731-2.827.069-.762.8-.73 2.066.069 2.828l15.342 14.551h-39.963c-1.104 0-2 .896-2 2s.896 2 2 2h39.899l-15.278 14.552c-.8.762-.831 2.028-.069 2.828.393.412.92.62 1.448.62.496 0 .992-.183 1.379-.552l17.449-16.62c.756-.755 1.172-1.759 1.172-2.828s-.416-2.073-1.207-2.862z"/>
                  </svg>
                </button>
            </NamedLink>
          </div>
        </LayoutWrapperMain>

        <LayoutWrapperFooter>
          <Footer />
        </LayoutWrapperFooter>
      </LayoutSingleColumn>
    </StaticPage>
  );
};

export default HowItWorksPage;
