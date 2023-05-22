import React from 'react';
import { StaticPage, TopbarContainer } from '../../containers';
import {
  LayoutSingleColumn,
  LayoutWrapperTopbar,
  LayoutWrapperMain,
  LayoutWrapperFooter,
  Footer,
} from '../../components';

import css from './Web3Marketplace.module.css';

const paragraphMarketplacePage = () => {
 
  // prettier-ignore
  return (
    <StaticPage
      title="Web3 Marketplace"
      schema={{
        '@context': 'http://schema.org',
        '@type': 'Web3Marketplace',
        description: 'About Web3Marketplace',
        name: 'Web3Marketplace',
      }}
    >
      <LayoutSingleColumn>
        <LayoutWrapperTopbar>
          <TopbarContainer />
        </LayoutWrapperTopbar>

        <LayoutWrapperMain className={css.staticPageWrapper}>
          <h1 className={css.heading}>Web2 Marketplace - Status Quo</h1>
          <div className={css.contentWrapper}>
            <div className={css.contentMain}>
              <p className={css.paragraph}>
                Online marketplaces, such as eBay, primarily make money by connecting users (i.e., buyers & sellers) and taking a 10% to 25% commission (“take rate”). 
                These fees help maintain the marketplace, but can increase costs for both sides of a transaction (i.e., seller increases listing price, buyer pays more). 
                While a vendor may not mind the commissions initially as it brings in new customers, over time they often grow frustrated by the high fees  for an already proven and established business.
              </p>
              <p className={css.paragraph}>
                The marketplace is owned by shareholders, who are typically senior executives, employees and institutional investors.
              </p>
              <h1 className={css.heading}>paragraph Marketplace - User-Owned</h1>
              <p className={css.paragraph}>
                Our vision is the users, who help build and interact with AutoMarketplace, own the majority of the site. 
                We also believe a low cost flat fee commission helps vendors retain more of their income and offer better pricing to consumers.
              </p>
              <p className={css.paragraph}>
                Every time a user completes a transaction on AutoMarketplace, not only do they get the service or product they need, 
                but earn an ownership stake, along with the vendor, in the platform. It's a unique incentive structure meant to reward users and vendors that help build AutoMarketplace. Effective costs for both sides of the transaction would decline, 
                users and vendors would be incentivized to use the marketplace they have a stake in. Management would retain a voting majority, but minority equity position to help run the company (i.e., strategy, marketing, managing disputes). 
              </p>
              <p className={css.paragraph}>
                Digital tokens (AUTOMKT tokens) built on the blockchain help facilitate this incentive structure. 
              </p>
              <p className={css.paragraph}>
                ADD PARALLEL IMAGE OF ABOVE
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

export default paragraphMarketplacePage;
