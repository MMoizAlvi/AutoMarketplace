import React from 'react';
import { StaticPage, TopbarContainer} from '../../containers';
import {
  LayoutSingleColumn,
  LayoutWrapperTopbar,
  LayoutWrapperMain,
  LayoutWrapperFooter,
  Footer,
  NamedLink
} from '../../components';


import css from './Blockchain.module.css';
import statusQuoImg from './statusQuo.png';
import blockchainImg from './blockchain.png';
import ethereumImg from './ethereum.png'

const BlockchainPage = () => {
  // prettier-ignore
  return (
    <StaticPage
      title="BlockchainPage"
      schema={{
        '@context': 'http://schema.org',
        '@type': 'BlockchainPage',
        description: 'Blockchian intoduction',
        name: 'BlockchainPage',
      }}
    >
      <LayoutSingleColumn>
        <LayoutWrapperTopbar>
          <TopbarContainer />
        </LayoutWrapperTopbar>

        <LayoutWrapperMain className={css.staticPageWrapper}>
          <h1 className={css.blockchainTitle}>What is <span className={css.blockchainTitleSpan}>Blockchain?</span></h1>
          <div className={css.contentWrapper}>
            <div className={css.contentMain}>
              <p className={css.blockchainParagraph}>
                 Blockchain technology provides infrastructure that
                 allows us to transact without a middleman.
              </p>
              <p className={css.blockchainParagraph}> 
                For example, if you need to send a business or person money you use a bank. A bank creates trust,
                provides security and maintains a centralized ledger (i.e., someone can't spend $200 if they only have $100 in their account).
                A blockchain can help do the same thing via a secure protocol (i.e., it's often called "crypto" because
                cryptography is used to secure the protocol) - without needing a centralized entity (i.e., bank in this case).
              </p>
              <p className={css.blockchainParagraph}>
                AutoMarketplace uses blockchain technology (i.e., crypto tokens) to create a mechanism that collapses middleman economics.
                A management layer is still needed to make decisions and execute on strategy, but will be minority shareholders.
                We believe the users and vendors who help build and interact with the site deserve a majority of the ownership.
                To complete the analogy, imagine a bank's customers owned the majority of the bank.
              </p>
              <div className={css.blockchainContainer}>
                <div>
                  <nav className={css.rightBlockHeading}>
                     <h1 className={css.upperHeading}>Status Quo</h1>
                     <h2 className={css.lowerHeading}>Centralized System</h2>
                  </nav>
                  <img className={css.statusQuo} src={statusQuoImg} alt="Centerlized System Image"/>
                </div>
                <div>
                  <nav className={css.leftBlockHeading}>
                     <h1 className={css.upperHeading}>Blockchain</h1>
                     <h2 className={css.lowerHeading}>Decentralized System</h2>
                  </nav>
                  <img className={css.blockchain} src={blockchainImg} alt="Blockchain Image"/>
                </div>
              </div>
              <h1 className={css.blockchainTitle}>Why <span className={css.blockchainTitleSpan}>Ethereum?</span></h1>
              <p className={css.blockchainParagraph}>
                We chose to build on Ethereum because it is the most widely used blockchain/smart contract protocol and second most valuable
                crypto asset (i.e. second only to Bitcoin). It has a large developer community and has proven security over several years.
              </p>
              <div className={css.buttonContainer}>
                <NamedLink name="HowItWorks" className={css.howItworksLink}>
                  <button className={css.howItworksBtn}>How It Works
                    <svg id="Layer" enable-background="new 0 0 64 64" className={css.rightArrow}  viewBox="0 0 64 64"
                      xmlns="http://www.w3.org/2000/svg">
                      <path d="m37.379 12.552c-.799-.761-2.066-.731-2.827.069-.762.8-.73 2.066.069 2.828l15.342 14.551h-39.963c-1.104 0-2 .896-2 2s.896 2 2 2h39.899l-15.278 14.552c-.8.762-.831 2.028-.069 2.828.393.412.92.62 1.448.62.496 0 .992-.183 1.379-.552l17.449-16.62c.756-.755 1.172-1.759 1.172-2.828s-.416-2.073-1.207-2.862z"/>
                    </svg>
                  </button>
                </NamedLink>
              </div>
              <img className={css.ethereumImg} src={ethereumImg} alt="Ethereum image"/>
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

export default BlockchainPage;
