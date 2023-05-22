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
  ExternalLink,
  NamedLink,
} from '../../components';

import css from './AboutPage.module.css';

const AboutPage = () => {
  const { siteTwitterHandle, siteFacebookPage } = config;
  const siteTwitterPage = twitterPageURL(siteTwitterHandle);

  // prettier-ignore
  return (
    <StaticPage
      title="About Us"
      schema={{
        '@context': 'http://schema.org',
        '@type': 'AboutPage',
        description: 'About Automarketplace',
        name: 'About page',
      }}
    >
      <LayoutSingleColumn>
        <LayoutWrapperTopbar>
          <TopbarContainer />
        </LayoutWrapperTopbar>

        <LayoutWrapperMain className={css.staticPageWrapper}>
          <h1 className={css.pageTitle}>About Us</h1>
          <div className={css.contentWrapper}>
            <div className={css.contentMain}>
              <p className={css.paragraph}>
                Before starting AutoMarketplace, we operated a fleet company in New York City,
                registering over two million city miles. We learned many expensive lessons,
                but also developed automotive expertise.
              </p>
              <p className={css.paragraph}>
                From identifying trustable local auto repair providers to saving on parts to preventive maintenance,
                we managed to significantly reduce our operating costs (i.e., cost per mile).
                Experience and data helped inform more thoughtful maintenance spend.
              </p>
              <p className={css.subParagraph}>
                AutoMarketplace is born from our experience spending hundreds of
                thousands of dollars on auto repair & maintenance in New York City.
              </p>
              <h3 className={css.heading}>Confirmed Pricing, No Surprises</h3>
              <p className={css.paragraph}>
                AutoMarketplace connects drivers to leading local mechanics, technicians and automotive vendors.
                Finding trustable auto repair & service providers with transparent pricing is difficult.
                Two out of three Americans don’t trust auto repair shops*.
              </p>
              <p className={css.paragraph}>
                Our listings offer confirmed discounted pricing on common auto repair & services from trustable local shops.
                There are no vague estimates, dishonest upselling or surprises.
              </p>
              <h3 className={css.heading}>Warranty on All Work</h3>
              <p className={css.paragraph}>
                All vendors on the platform warranty their work, providing an additional layer of comfort.
                Warranty terms vary by the service provider, but are clearly described in each listing.
                We will also proactively help resolve any conflicts should they arise,
                but believe our screening processes and unique user-owned structure helps ensure only the top-rated businesses are on the platform.
              </p>
              <h3 className={css.heading}>Financing Auto Repair & BNPL</h3>
              <p className={css.paragraph}>
                According to AAA, 64 million American drivers (one in three) are unable to pay for unexpected car repairs without going into debt.
                This is why we've integrated leading Buy Now, Pay Later (BNPL) provider Affirm as an option. In addition,
                we also have our own BNPL program for select users (click here to learn more).
              </p>
              <h3 className={css.heading}>Web3 & User Ownership</h3>
              <p className={css.paragraph}>
                The rise of the internet (Web1) in the 1990s saw the creation of online marketplaces, such as eBay,
                which laid the foundation for modern day eCommerce, interactive,
                increasingly done on smartphones and based on monetizing a user's personal data (Web2).
                Today, the internet is going through another transformational change (Web3), enabled by blockchain technology. *AAA Survey
              </p>
              <p className={css.paragraph}>
                On Web3, eCommerce is reimagined, platforms are majority-owned and controlled by users,
                who benefit from monetizing their data and participation. AutoMarketplace is built for this new paradigm.
              </p>
              <p className={css.web3}>
                On Web3, eCommerce is reimagined,
                platforms are majority-owned and controlled by users, who monetize their data and participation .
                AutoMarketplace is built for this new paradigm
              </p>
              <div className={css.buttonContainer}>
                <NamedLink name="UserOwnershipPage" className={css.userOwned}>
                  <button className={css.userOwnershipBtn}>User-Ownership 
                    <svg
                      id="Layer" enable-background="new 0 0 64 64"
                      className={css.rightArrow}  viewBox="0 0 64 64"
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

export default AboutPage;