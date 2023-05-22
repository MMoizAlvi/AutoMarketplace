import React from 'react';
import config from '../../config';
import { twitterPageURL } from '../../util/urlHelpers';
import { StaticPage, TopbarContainer } from '..';
import {
  LayoutSingleColumn,
  LayoutWrapperTopbar,
  LayoutWrapperMain,
  LayoutWrapperFooter,
  Footer,
  ExternalLink,
  NamedLink
} from '../../components';

import css from './UserOwnershipPage.module.css';
import amazon from './amazon.png';
import ownershipStake from './ownershipStake.png';

const UserOwnershipPage = () => {
  const { siteTwitterHandle, siteFacebookPage } = config;
  const siteTwitterPage = twitterPageURL(siteTwitterHandle);

  // prettier-ignore
  return (
    <StaticPage
      title="User-Ownership"
      schema={{
        '@context': 'http://schema.org',
        '@type': 'UserOwnershipPage',
        description: 'User-Ownership Details',
        name: 'User-Ownership',
      }}
    >
      <LayoutSingleColumn>
        <LayoutWrapperTopbar>
          <TopbarContainer />
        </LayoutWrapperTopbar>

        <LayoutWrapperMain className={css.staticPageWrapper}>
          <h1 className={css.pageTitle}><span className={css.underline}>Status Quo Ma</span><span>rketplace</span></h1>
          <div className={css.contentWrapper}>
            <div className={css.contentMain}>
              <p className={css.paragraph}>
                Online marketplaces, such as Amazon, make money by connecting
                users (i.e., buyers & sellers) and taking a commission (typically 10% to
                25%). Commissions help maintain the marketplace, but increase
                costs for both sides of a transaction (i.e., seller increases listing price,
                buyer pays more). The marketplace is owned by shareholders, who
                retain 100% of the commissions.
              </p>
              <div className={css.imageContainer}>
              <img className={css.marketplaceImage} src={amazon} alt="marketplace image" />  
              </div>  
              <h3 className={css.userOwnedTitle}>
                   AutoMarketplace is<span className={css.underline}> User Owned</span>
              </h3>
              <p className={css.paragraph}>
                What if the marketplace was majority owned by its users? The
                commissions would be returned to users in the form of marketplace
                ownership. Effective costs would decline and users would be
                incentivized to use the marketplace they have a stake in.
              </p>
              <p className={css.paragraph}>
                Using blockchain technology <NamedLink name="BlockchainPage" className={css.ethereumLink}>(Ethereum)</NamedLink>, users of AutoMarketplace
                will be its majority owners (80%). Management will retain a minority
                (20%) to help run the company (i.e. strategy, marketing, disputes). 
              </p>
              <div className={css.imageContainer}>
                <img className={css.ownershipImage} src={ownershipStake} alt="marketplace image" />
              </div> 
              <div className={css.buttonContainer}>
                <NamedLink name="HowItWorks" className={css.userOwned}>
                  <button className={css.userOwnershipBtn}>How It Works
                    <svg id="Layer" enable-background="new 0 0 64 64" className={css.rightArrow}  viewBox="0 0 64 64"  
                      xmlns="http://www.w3.org/2000/svg">
                      <path d="m37.379 12.552c-.799-.761-2.066-.731-2.827.069-.762.8-.73 2.066.069 2.828l15.342 14.551h-39.963c-1.104 0-2 .896-2 2s.896 2 2 2h39.899l-15.278 14.552c-.8.762-.831 2.028-.069 2.828.393.412.92.62 1.448.62.496 0 .992-.183 1.379-.552l17.449-16.62c.756-.755 1.172-1.759 1.172-2.828s-.416-2.073-1.207-2.862z"/>
                    </svg>
                  </button>
                </NamedLink>
              </div>              
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

export default UserOwnershipPage;
