import React from 'react';
import config from '../../config';
import { twitterPageURL } from '../../util/urlHelpers';
import { StaticPage, TopbarContainer } from '../../containers';
import {
  LayoutSingleColumn,
  LayoutWrapperTopbar,
  LayoutWrapperMain,
  LayoutWrapperFooter,
  Footer,
} from '../../components';


import css from './EarningAUTOMKTToken.module.css';


const EarningAUTOMKTTokenPage = () => {
  const { siteTwitterHandle, siteFacebookPage } = config;
  const siteTwitterPage = twitterPageURL(siteTwitterHandle);

  // prettier-ignore
  return (
    <StaticPage
      title="EarningAUTOMKTTokenPage"
      schema={{
        '@context': 'http://schema.org',
        '@type': 'EarningAUTOMKTTokenPage',
        description: 'Earning AUTOMKT tokens',
        name: 'EarningAUTOMKTTokenPage',
      }}
    >
      <LayoutSingleColumn>
        <LayoutWrapperTopbar>
          <TopbarContainer />
        </LayoutWrapperTopbar>

        <LayoutWrapperMain className={css.staticPageWrapper}>
          <h1 className={css.earningTokenTitle}>Earning <span className={css.earningTokenTitleSpan}>AUTOMKT Tokens</span></h1>
          <div className={css.contentWrapper}>
            <div className={css.contentMain}>
              <p className={css.paragraph}>
                 20 million AUTOMKT reward tokens will be created and
                 16 million will be distributed. Founders/management will
                 own 20% of the Marketplace, but have control until six
                 months after listing. Users will own 80% of the
                 Marketplace. The initial value of the Marketplace is its
                 rewards program. After all tokens are distributed
                 AUTOMKT Tokens will list on a crypto exchange, such as
                 Coinbase. At that point, the market will value the
                 AUTOMKT token (i.e., valuation based on usage, growth,
                 profitability, etc).
              </p>
                 <h2 className={css.transactionsHeading}>Transactions</h2>
                 <div className={css.totalTransactions_container}>
                    <h2 className={css.totalTransactionsHeading}>Total Transactions*</h2>
                    <h2 className={css.additionalTransactionsHeading}>Additional Tokens**</h2>
                 </div>
                 <div className={css.container_lists}>
                 <ul className={css.containerRight_list}>
                     <li>10</li>
                     <li>50</li>
                     <li>100</li> 
                     <li>500</li>
                     <li>1,000</li>
                     <li>2,000+</li>
                 </ul>
                 <ul className={css.containerLeft_list}>
                     <li>10</li>
                     <li>50</li>
                     <li>100</li> 
                     <li>500</li>
                     <li>1,000</li>
                     <li>5,000</li>
                 </ul> 
                 </div>
                 <p className={css.transactionsContent}>*Each unique service via AutoMarketplace plan / pakcage</p>
                 <p className={css.transactionsContent}>**One-time additional tokens at certain thresholds</p>
                 <h2 className={css.transactedHeading}>Value Transacted</h2>
                 <div className={css.totalTransacted_container}>
                    <h2 className={css.totalTransacedValueHeading}>Value***</h2>
                    <h2 className={css.additionalTransactedHeading}>Additional Tokens</h2>
                 </div>
                 <div className={css.container_lists}>
                 <ul className={css.containerRight_list}>
                     <li>$500</li>
                     <li>$1,000</li>
                     <li>$5,000</li> 
                     <li>$10,000</li>
                     <li>$50,000</li>
                     <li>$100,000</li>
                     <li>$1,000,000+</li>
                 </ul>
                 <ul className={css.containerLeft_list}>
                     <li>10</li>
                     <li>20</li>
                     <li>100</li> 
                     <li>500</li>
                     <li>1,000</li>
                     <li>5,000</li>
                     <li>10,000</li>
                 </ul> 
                 </div>
                 <p className={css.transactionsContent}>***Max credit per unique transaction is $1,000</p>
                 <h2 className={css.transactedHeading}>Vendor Rating</h2>
                 <div className={css.vendorRating_container}>
                    <h2 className={css.totalTransactionsHeading}>Rating*</h2>
                    <h2 className={css.additionalVendorHeading}>Additional Tokens</h2>
                 </div>
                 <div className={css.container_lists}>
                 <ul className={css.containerRight_list}>
                     <li>4.40+</li>
                     <li>4.50+</li>
                     <li>4.60+</li> 
                     <li>4.70+</li>
                     <li>4.80+</li>
                     <li>4.90+</li>
                 </ul>
                 <ul className={css.containerLeft_list}>
                     <li>1,000</li>
                     <li>2,000</li>
                     <li>3,000</li> 
                     <li>4,000</li>
                     <li>5,000</li>
                     <li>10,000</li>
                 </ul> 
                 </div>
                 <p className={css.transactionsContent}>*One time, at time of 500th unique transaction</p>
                 <h2 className={css.transactedHeading}>Sign-Up New Vendor or User</h2>
                 <div className={css.newVendor_container}>
                    <h2 className={css.totalTransactionsHeading}>Vendor/Users**</h2>
                    <h2 className={css.additionalNewVendorHeading}>Additional Tokens</h2>
                 </div>
                 <div className={css.container_lists}>
                 <ul className={css.containerRight_list}>
                     <li>1</li>
                     <li>5</li>
                     <li>10</li> 
                     <li>100</li>
                     <li>250</li>
                     <li>500</li>
                 </ul>
                 <ul className={css.containerLeft_list}>
                     <li>1</li>
                     <li>100</li>
                     <li>500</li> 
                     <li>1,000</li>
                     <li>2,000</li>
                     <li>5,000</li>
                 </ul> 
                 </div>
                 <p className={css.transactionsContent}>**Verified user, awarded after 5th unique transaction</p>   
                 <h2 className={css.transactedHeading}>YouTube Content</h2>
                 <div className={css.youtubeContent_container}>
                    <h2 className={css.totalTransactionsHeading}>Views***</h2>
                    <h2 className={css.additionalYoutubeHeading}>Additional Tokens</h2>
                 </div>
                 <div className={css.container_lists}>
                 <ul className={css.containerRight_list}>
                     <li>1,000</li>
                     <li>5,000</li>
                     <li>10,000</li> 
                     <li>20,000</li>
                     <li>50,000</li>
                     <li>100,000</li>
                 </ul>
                 <ul className={css.containerLeft_list}>
                     <li>10</li>
                     <li>50</li>
                     <li>100</li> 
                     <li>500</li>
                     <li>1,000</li>
                     <li>5,000</li>
                 </ul> 
                 </div>
                 <p className={css.transactionsContent}>***Selected publication on AutoMarketplace YouTube channel</p> 
                 <p className={css.paragraph}>
                     <span className={css.note}>Note: </span>Before AUTOMKT's listing on a crypto exchange the
                     maximum tokens per unique verified user is 150,000
                     AUTOMKT tokens. Six months after listing there will no
                     longer be a token cap.
                 </p>  
                <h1 className={css.ownershipRegulationTitle}>AUTOMKT Tokens & Regulation </h1>
                <p className={css.paragraph}> 
                  Since the regulatory environment related to crypto assets is constantly changing,
                  we want to ensure any structure we build is in compliance with regulatory guidance. In an ideal world,
                  the AUTOMKT token would simply represent a share of the company, but that could violate current and/or future US securities regulations.
                </p>
                <p className={css.paragraph}>
                  Therefore, our path to making AutoMarketplace user-owned is through a rewards program built on the blockchain.
                  A crypto-enabled rewards program is allowed under current regulatory guidance.
                  The AUTOMKT rewards program will not only serve as the foundational building block of AutoMarketplace's ultimate value,
                  but also have benefits similar to other reward programs (i.e., discounts on goods & services, Buy Now, Pay Later (BNPL) access).
                </p>
                <p className={css.paragraph}>
                  Once all AUTOMKT reward tokens are distributed, we will apply for a formal license that will allow us to list AUTOMKT reward tokens on well known crypto exchanges,
                  such as Coinbase. We believe, as the crypto asset market gains mass adoption, regulations will become clearer.
                </p>
            </div>
          </div>
        </LayoutWrapperMain>

        <LayoutWrapperFooter>
          <Footer />
        </LayoutWrapperFooter>
      </LayoutSingleColumn>
    </StaticPage>
  );
};

export default EarningAUTOMKTTokenPage;
